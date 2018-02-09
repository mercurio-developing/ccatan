import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/forms.service'
import { EmailValidatorDirective } from '../../shared/email-validator.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[FormService]
})

export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';
  submitted;

  constructor(private contactService: FormService) { }

  onSubmit(dataEmail) {
    this.submitted = true;
    console.log(dataEmail)
    this.contactService.sendEmail(dataEmail)
  }

  ngOnInit() {
  }

}
