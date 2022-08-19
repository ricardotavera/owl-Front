import { Component, OnInit,  ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {

 
  userFacts = []
  handlerMessage = '';
  roleMessage = '';
  username = 'username'
  email = 'useraddress@email.com'

  constructor(private alertController: AlertController) { }



  ngOnInit() {
    this.userFacts = [{name: 'Reportes', value:'19'},
     {name:'Ciudad', value:'Bucaramanga'},
      {name: 'Cuenta', value:'Basica'}]
  }


  async presentAlert(  ) {
    const alert = await this.alertController.create({
      header: '¿Deseas salir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  @ViewChild(IonModal) modal: IonModal;

    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    name: string;
  
    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  
    confirm() {
      this.modal.dismiss(this.name, 'confirm');
    }
  
    onWillDismiss(event: Event) {
      const ev = event as CustomEvent<OverlayEventDetail<string>>;
      if (ev.detail.role === 'confirm') {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    }
  }
  

