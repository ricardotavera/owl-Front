import { Component, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import 'leaflet.smooth_marker_bouncing'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  map: L.Map;

  constructor() { }

  ngOnInit() {
    
  }


  leafletMap() {
    this.map = L.map('mapPicker', {
      center: [ 7.13366, -73.11934 ],
      zoom: 15,
      renderer: L.canvas()
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    

    var marker = new L.marker({ lat: 7.13366, lng: -73.11934 }, {
      draggable: 'true'
    }).addTo(this.map);

    var circle = L.circle([51.508, -0.11], {
      color: 'green',
      fillColor: '#f0f8ff',
      fillOpacity: 0,
      radius: 500
  }).addTo(this.map)

  this.map.on('click', function(e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
     marker.setLatLng([e.latlng.lat, e.latlng.lng])
     /* circle.setLatLng([e.latlng.lat, e.latlng.lng]) */

     
     
});

 marker.on('dragend', function (e) 
{
  circle.setLatLng([marker.latlng.lat, marker.latlng.lng])
  marker.bindPopup(
    `<b>Ubicacion obtenida!</b> <ion-icon name="ios-checkmark-circle"></ion-icon>
    <br><button (click)="${this.isMapPikerOpen(false)}" ion-button>Aceptar</button>`
    ).openPopup();
  
});


marker.on('click', function() {
  this.bounce(2) // bounce 2 times
  .on('bounceend',function() {
      console.log('bounce end');
  }); 
});
   
  }



 
  @ViewChild(IonModal) modal: IonModal;

    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    name: string;
  
    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  
    confirm() {
      this.modal.dismiss(null, 'confirm');
    }
  
    onWillDismiss(event: Event) {
      const ev = event as CustomEvent<OverlayEventDetail<string>>;
      if (ev.detail.role === 'confirm') {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    }


}
