import { Component, OnInit, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { IContact } from "./../../../interfaces/contact.interface";

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.css'],
  standalone: true,
  imports: [ ContactCardComponent, NgFor, MatGridListModule ]
})


export class ContactsGridComponent implements OnInit {
  @Input() contacts!: IContact[];
  columns: number = 4;


  constructor() { }
  ngOnInit() {}

}
