import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular' ; 

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  username:string;

   appPages = [
    { title: 'Perfil', url: '/tablinks/profile', tab:'profile', icon: 'person-circle'},
    { title: 'Nuevo reporte', url: '/tablinks/report', tab:'report', icon: 'push-sharp' },
    { title: 'Home', url: '/tablinks/home',  tab:'home', icon: 'home-sharp' },
    { title: 'Notificaciones', url: '/tablinks/noti', tab:'noti', icon: 'notifications-sharp', badge: 3  },
    { title: 'Informacion', url: '/tablinks/info', tab:'info', icon: 'information-circle-sharp' },
  ];

  constructor(private menu: MenuController) {}

  openFirst ( ) { 
    this . menu . enable ( true , 'first' ) ;
    this . menu . open ( 'first' ) ;
  }

  ngOnInit() {

    this.username = this.username || 'Username'
  }

 

}
