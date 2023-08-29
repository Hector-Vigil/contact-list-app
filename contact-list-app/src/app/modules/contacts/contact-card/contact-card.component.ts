import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class ContactCardComponent implements OnInit {
  @Input() name: string = "John Doe";
  @Input() photoUrl?: string = "./../../../../assets/avatar.png";

  constructor() { }

  ngOnInit(): void {
  }

}
