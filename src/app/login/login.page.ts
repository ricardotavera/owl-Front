import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { MenuController } from '@ionic/angular';
import { LoginPageModule } from "./login.module";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}


@Component({
  selector: 'menu-example',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');

  }

  openEnd(): void {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}


function isActive() {
  throw new Error('Function not implemented.');
}

