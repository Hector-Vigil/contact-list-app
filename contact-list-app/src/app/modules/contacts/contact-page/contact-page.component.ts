import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  standalone: true,
  imports:[ButtonComponent]
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  phoneNumberSeparator(phone:string){
    return `${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6)}`
  }

}
