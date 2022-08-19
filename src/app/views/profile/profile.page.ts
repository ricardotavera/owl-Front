import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userFacts = []
  constructor() { }

  ngOnInit() {
    this.userFacts = [{name: 'Reportes', value:'19'},
     {name:'Ciudad', value:'Bucaramanga'},
      {name: 'Cuenta', value:'Basica'}]
  }

}
