import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

	photos = [
		"assets/img/tours/tour-1.jpg",
		"assets/img/tours/tour-2.jpg"

	]

  constructor() { }

  ngOnInit() {
  }

}
