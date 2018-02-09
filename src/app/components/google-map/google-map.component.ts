import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  zoom: number = 15;
  
  lat: number = -13.2955041;
  lng: number = -72.1187500;

  constructor() { }

  ngOnInit() {
  }

}
