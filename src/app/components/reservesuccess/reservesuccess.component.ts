import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-reservesuccess',
  templateUrl: './reservesuccess.component.html',
  styleUrls: ['./reservesuccess.component.css']
})
export class ReservesuccessComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 3000);
  }
  
  ngOnInit() {
  }

}
