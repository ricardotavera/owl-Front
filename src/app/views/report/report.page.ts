import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapPickerComponent } from '../map-picker/map-picker.component'
import * as L from 'leaflet';
import 'leaflet.smooth_marker_bouncing'
import { AlertController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  map: L.Map;
  handlerMessage = '';
  reportData = {}
  pickerLat: string = ''
  pickerLng: string = ''

  constructor(public modalCtrl: ModalController,
    private alertController: AlertController,
    private globalService: GlobalService,
    private toastController: ToastController) { }

  ngOnInit() {

  }

  submitReport(f) {

    this.globalService.sendReport(f.value, this.pickerLat, this.pickerLng).subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        this.presentToast('top', 'Publicacion exitosa')
        
      },
      (error) => {                              //Error callback
        
        this.presentToast('top', 'Error en la publicacion, Intenta nuevamente')
  
        //throw error;   //You can also throw the error to a global error handler
      }
    )
  }


  async openMapPicker() {
    const modal = await this.modalCtrl.create({
      component: MapPickerComponent,
      componentProps: { lat: 7.13366, lng: -73.11934 },
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
    })

    modal.onDidDismiss().then((data) => {
      const location = data['data'];
      console.log(location)
      this.pickerLat = location.lat
      this.pickerLng = location.lng // Here's your selected user!
    });

    return await modal.present();
  }

  async presentAlert() {
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


  async presentToast(position: 'top' | 'middle' | 'bottom', message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
