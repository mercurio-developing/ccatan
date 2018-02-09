import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-review-carousel',
  templateUrl: './review-carousel.component.html',
  styleUrls: ['./review-carousel.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 5000, noPause: false}}]
})
export class ReviewCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
