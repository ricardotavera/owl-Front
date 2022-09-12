import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as L from 'leaflet';
import 'leaflet.smooth_marker_bouncing'


@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss'],
})
export class MapPickerComponent implements OnInit {

  map: L.Map

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() { this.leafletMap(); }


  leafletMap() {
    this.map = L.map('mapPicker', {
      center: [ 7.13366, -73.11934 ],
      zoom: 15,
      renderer: L.canvas()
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    

    var marker = new L.marker({ lat: 7.13366, lng: -73.11934 }, {
      draggable: 'true',
    }).addTo(this.map);

    var circle = L.circle(marker.getLatLng(), {
      color: '#3cb043',
      fillColor: '#3cb043',
      radius: 200,
      weight: 1,
      fillOpacity: 0.17,
  }).addTo(this.map)

 

 marker.on('dragend', function (e) 
{
  
  marker.bindPopup(
    `
    <div>
    <b>Ubicacion obtenida!<b/>
        <ion-button (click)={{this.confirm()}} expand="block" style="height: 30px;">
        <ion-icon name="checkmark-circle"></ion-icon>
            <ion-label>Confirmar</ion-label>
        </ion-button>
    </div>    

   `, {closeButton: false},

    ).openPopup();
    
    circle.setLatLng(marker.getLatLng())

      console.log(marker.getLatLng().lat)
      console.log(marker.getLatLng().lng)  
});



  
  }


confirm(position) {

    
    this.dismiss();
      
}

async dismiss() {
  await this.modalCtrl.dismiss();
}

ngOnDestroy() {
  this.map.remove();
}

}
