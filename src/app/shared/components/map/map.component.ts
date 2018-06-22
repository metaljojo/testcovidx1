import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() coords: {latitude: number, longitude: number};

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const POSITION = { lat: this.coords.latitude, lng: this.coords.longitude };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: POSITION || { lat: 22, lng: 22}
    });
    const marker = new google.maps.Marker({
      position: POSITION,
      map: map
    });
  }

}
