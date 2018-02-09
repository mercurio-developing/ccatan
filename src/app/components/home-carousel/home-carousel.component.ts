import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

 
@Component({
  selector: 'app-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 10000, noPause: false}}],
})


export class HomeCarouselComponent  {
  

  constructor() { }

  ngOnInit() {
  }
}
