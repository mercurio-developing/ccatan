import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/forms.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  providers:[FormService]
})
export class ReserveComponent implements OnInit {
    
    name: string = '';
    email: string = '';
    phone:number;
    nadults:number;
    nchilds:number;
    checkin:any;
    checkout:any;
    room:string;
    message: string = '';
    reserverRoom;

  submitted;

  constructor(private router: Router, private route: ActivatedRoute,private reserve: FormService) { }

  ngOnInit() {
    this.reserverRoom = this.route.snapshot.queryParamMap.get('room')
  }

  onSubmit(dataReserve) {
    this.submitted = true;
    console.log(dataReserve)
    this.reserve.sendReserve(dataReserve)
  }

}
