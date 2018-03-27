import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()

export class FormService {


  constructor(private http: Http, private router: Router) { }
  errors;

  sendEmail(dataEmail) {
    this.http.post('http://localhost:3000/sendemail', dataEmail)
      .subscribe((data) => {
        console.log(data)
      },
      error => {
        this.errors = error;
      }, () => {
        this.router.navigate(['emailsuccess'])
      }
      )
  }

  sendReserve(dataReserve) {
    this.http.post('http://localhost:3000/reserve', dataReserve)
      .subscribe((data) => {
        console.log(data)
      },
      error => {
        this.errors = error;
      }, () => {
        this.router.navigate(['reservesuccess'])
      }
      )
  }
}