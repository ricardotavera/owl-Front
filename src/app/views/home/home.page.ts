import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  map: Leaflet.Map;

  constructor() { }

  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId', {
      center: [ 7.13366, -73.11934 ],
      zoom: 15,
      renderer: Leaflet.canvas()
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    this.addMarker();
   
  }
  addMarker() {
    
    const homeMarker = Leaflet.marker({ lat: 7.13366, lng: -73.11934 },{draggable : true});
    homeMarker.addTo(this.map);
    homeMarker.bindPopup('<div><h3>{{ modalidad }}</h3><p>{{ hora }}</p><br><p>{{ drescrip }}</p></div><br><button id="poppup">Mas info</button>', {
      closeButton: true
    });

    homeMarker.on('dragend', function (e) 
    {
      console.log(homeMarker.getLatLng().lat)
      console.log(homeMarker.getLatLng().lng)
    });
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }
}
