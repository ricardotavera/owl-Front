import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapPickerComponent } from '../map-picker/map-picker.component'
import * as L from 'leaflet';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import 'leaflet.smooth_marker_bouncing'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  map: L.Map;
  handlerMessage = '';
  reportData = {}

  constructor(public modalCtrl: ModalController,
    private alertController: AlertController) { }

  ngOnInit() {
    
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
