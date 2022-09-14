import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { GlobalService } from 'src/app/services/global.service';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  map: Leaflet.Map;
  reportList = [];

  constructor(private globalService: GlobalService,
              private modalCtrl: ModalController) { }

  ngOnInit() { 

    
    this.getData()
   }

   


   async getData(){
    
     /* Getting data from service */
     this.globalService.getReports().subscribe( (res) => {
      console.log(res)
      this.reportList = res;
     });
     await new Promise(f => setTimeout(f, 1000));

   }


  ionViewDidEnter() { 
    
    
  

   /*  Create map and mapping markers */
    this.leafletMap();
    this.mapMarkers(this.reportList); 
  }
 

  leafletMap() {
    this.map = Leaflet.map('mapId', {
      center: [ 7.13366, -73.11934 ],
      zoom: 15,
      renderer: Leaflet.canvas()
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

   
    
   
  }

/*   async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  } */


  mapMarkers(markers) {
    
    var locIcon = Leaflet.icon({
      iconUrl: '/assets/owl-marker.png',
      iconSize: [38, 55],
      iconAnchor: [22, 54],
      popupAnchor: [-3, -76],
      shadowUrl: '/assets/marker-shadow.png',
      shadowSize: [68, 55],
      shadowAnchor: [22, 54]
  });

    console.log(markers)
    markers.map( (m) => {

      const marker = Leaflet.marker ({ lat: m.lat, lng: m.lng},
                                      {draggable: false, icon: locIcon});
                                      
      marker.addTo(this.map)


      marker.bindPopup(`
      <div>
      <div class="card-body" style="font-family: sans-serif;">
        <h5 class="card-title" style="font-weight: bold; margin-bottom: -17px;">  ${m.dia}</h5>
        <h6 class="card-subtitle mb-2 text-muted style="color: grey">${m.hora}</h6>
        <h6 class="card-text" style="style="color: grey"">${m.titulo}</h6>
        <div styel="display: flex;
        flex-direction: row;
        justify-content: flex-end;">
        <ion-button (click)="onClick()" fill="clear" shape="round" size="m" slot="start">
           Detalles
        <ion-icon name="arrow-forward-circle">Ver mas</ion-icon>
      </ion-button>
      </div>
      </div>
    </div>`,
      {closeButton: false, className: 'repot-popup'})


    })

  }


  ionViewWillLeave() {
    this.map.remove();
  }
}
