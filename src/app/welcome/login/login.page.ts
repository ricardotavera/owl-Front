import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { MenuController } from '@ionic/angular';

>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private menu: MenuController) {}
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
>>>>>>> Stashed changes

  ngOnInit() {
  }

}
<<<<<<< Updated upstream
=======





function isActive() {
  throw new Error('Function not implemented.');
}

>>>>>>> Stashed changes
