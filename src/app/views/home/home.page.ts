import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { GlobalService } from 'src/app/services/global.service';
import { ModalController } from '@ionic/angular';
import { ReportInfoComponent } from '../report-info/report-info.component';



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

   


   getData(){
    
     /* Getting data from service */
     this.globalService.getReports().subscribe( (res) => {
      this.reportList = res;
     });
     

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

    
    markers.map( (m) => {

      m.fecha = new Date(m.fecha);

      const marker = Leaflet.marker ({ lat: m.lat, lng: m.lng},
                                      {draggable: false, icon: locIcon});
                                      
      marker.addTo(this.map)


      marker.bindPopup(`
      <div>
      <div class="card-body" style="font-family: sans-serif;">
        <h5 class="card-title" style="font-weight: bold; margin-bottom: -17px;">  ${m.fecha.toDateString()}</h5>
        <h6 class="card-subtitle mb-2 text-muted style="color: grey">${m.fecha.toLocaleTimeString()}</h6>
        <h6 class="card-text" style="style="color: grey"">${m.titulo}</h6>
        <div id="detail-button">
  
      </ion-button>
      </div>
      </div>
    </div>`,
      {closeButton: false, className: 'repot-popup'})

    })


    var circle = Leaflet.circle([this.reportList[0].lat, this.reportList[0].lng], {
      color: 'red',
      fillColor: '#f03',
      weight: 1,
      fillOpacity: 0.1,
      radius: 500
  }).addTo(this.map);

  }
async openInfoPanel(report) {
  
  const modal = await this.modalCtrl.create({
  component: ReportInfoComponent,
  componentProps: report,
  animated: true,
  mode: 'ios',
  backdropDismiss: false,
})

return await modal.present();
}



  ionViewWillLeave() {
    this.map.remove();
  }
}
