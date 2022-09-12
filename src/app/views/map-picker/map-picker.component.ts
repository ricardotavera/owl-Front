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

  map: L.Map;
  pickerLoc: string;
  



  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() { this.leafletMap();
    this.createMarker();
   }

   

  leafletMap() {

    this.map = L.map('mapPicker', {
      center: [ 7.13366, -73.11934 ],
      zoom: 15,
      renderer: L.canvas()
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    


  }

  createMarker(){
    var locIcon = L.icon({
      iconUrl: '/assets/owl-marker.png',
      iconSize: [38, 55],
      iconAnchor: [22, 54],
      popupAnchor: [-3, -76],
      shadowUrl: '/assets/marker-shadow.png',
      shadowSize: [68, 55],
      shadowAnchor: [22, 54]
  });
    
    const marker = new L.marker({ lat: 7.13366, lng: -73.11934 }, {
      draggable: 'true', icon: locIcon
    }).addTo(this.map);
    
    

    const circle = L.circle(marker.getLatLng(), {
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
      </div>    
  
     `, {closeButton: false},
  
      ).openPopup();
      
      circle.setLatLng(marker.getLatLng())
       
        console.log(marker.getLatLng())
      
  });
  
  

   }


getMarkerData(){
 
}

confirm() {

    
    this.dismiss();
    this.modalCtrl.dismiss(this.pickerLoc);
      
}

async dismiss() {
  await this.modalCtrl.dismiss();
}

ngOnDestroy() {
  this.map.remove();
}

}
