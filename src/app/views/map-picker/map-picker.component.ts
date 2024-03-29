import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as L from 'leaflet';
import 'leaflet.smooth_marker_bouncing'

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss'],
})

export class MapPickerComponent implements OnInit {

  map: L.Map;
  pickerLoc = {}




  constructor(public modalCtrl: ModalController,
    public navParams: NavParams) { }

  ngOnInit() {

  }



  ionViewDidEnter() {
    this.leafletMap();
    this.createMarker(this.pickerLoc);
  }



  leafletMap() {

    this.map = L.map('mapPicker', {
      center: [this.navParams.get('lat'), this.navParams.get('lng')],
      zoom: 15,
      renderer: L.canvas()
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);



  }



  createMarker(picker) {
    var locIcon = L.icon({
      iconUrl: '/assets/owl-marker.png',
      iconSize: [38, 55],
      iconAnchor: [22, 54],
      popupAnchor: [-3, -76],
      shadowUrl: '/assets/marker-shadow.png',
      shadowSize: [68, 55],
      shadowAnchor: [22, 54]
    });

    const marker = new L.marker([this.navParams.get('lat'), this.navParams.get('lng')], {
      draggable: 'true', icon: locIcon
    }).addTo(this.map);



    const circle = L.circle(marker.getLatLng(), {
      color: '#3cb043',
      fillColor: '#3cb043',
      radius: 200,
      weight: 1,
      fillOpacity: 0.17,
    }).addTo(this.map);





    marker.on('dragend', (e) => {
      this.pickerLoc = getData(e)
    });


    function getData(e) {


      circle.setLatLng(marker.getLatLng())
      marker.bindPopup(
        `
      <div>
      <b>Ubicacion obtenida!<b/>
      </div>    
  
     `, { closeButton: false },

      ).openPopup();

      return marker.getLatLng()



    }

  }







  confirm() {

    this.modalCtrl.dismiss(this.pickerLoc);

  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    this.map.remove();
  }

}
