import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  photos = [
    "assets/img/about/about-1.jpg",
    "assets/img/about/about-2.jpg",
    "assets/img/about/about-3.jpg",
    "assets/img/about/about-4.jpg",
    "assets/img/about/about-5.jpg",
    "assets/img/about/about-6.jpg",
    "assets/img/about/about-7.jpg",
    "assets/img/about/about-8.jpg",
    "assets/img/about/about-9.jpg",
    "assets/img/about/about-10.jpg",

  ]


  constructor() { }

  ngOnInit() {
  }

}
