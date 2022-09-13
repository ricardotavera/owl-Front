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

    

   }

   


   getData(){

     /* Getting data from service */
     this.globalService.getReports().subscribe( (res) => {
      this.reportList = res;
     });

   }


  ionViewDidEnter() { 
    
    this.getData()
    
   /*  Create map and mapping markers */
    this.leafletMap();
    this.mapMarkers(this.reportList); }
 

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



      var customOptions =
        {
        'maxWidth': '500',
        'class' : 'popup'
        }

      marker.bindPopup(`
      <div>
      <div class="card-body">
        <h5 class="card-title">${m.date}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.time}</h6>
        <p class="card-text">${m.phrase_description}</p>
        <ion-button (click)="onClick()" fill="clear" shape="round">
        <ion-icon name="checkmark-circle"></ion-icon>
            <ion-label>Ver mas</ion-label>
      </ion-button>
      </div>
    </div>`,
      {closeButton: false, className: 'repot-popup'})


    })

  }


  ionViewWillLeave() {
    this.map.remove();
  }
}
