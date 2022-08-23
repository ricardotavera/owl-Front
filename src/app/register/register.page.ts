import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
  async register() {
    this.dismiss();
    this.router.navigateByUrl('tabs');   
    return await this.modalCtrl.dismiss();
  }
 
  
}
