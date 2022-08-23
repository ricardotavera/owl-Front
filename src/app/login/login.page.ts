import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit() {
  }


  login() {
      this.dismiss()
      this.router.navigateByUrl('tabs');   
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}




