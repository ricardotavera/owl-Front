import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapPickerComponent } from '../map-picker/map-picker.component'
import * as L from 'leaflet';
import 'leaflet.smooth_marker_bouncing'
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  map: L.Map;
  handlerMessage = '';
  reportData = {}
  pickerLat:string = ''
  pickerLng:string = ''

  constructor(public modalCtrl: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {
    
  }

  submitReport(f){
    console.log(f.value)
  }


  async openMapPicker() {
    const modal = await this.modalCtrl.create({
      component: MapPickerComponent,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
    })

    return await modal.present();
  }

  async presentAlert(  ) {
    const alert = await this.alertController.create({
      header: 'Cornfirmar publicacion',  
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Publicar',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

}
}
