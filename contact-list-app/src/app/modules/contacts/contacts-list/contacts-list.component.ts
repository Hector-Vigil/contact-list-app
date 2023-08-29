import { Component, OnInit, Input } from '@angular/core';
import {NgFor} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  standalone: true,
  imports: [MatListModule,NgFor],
})
export class ContactsListComponent implements OnInit {
  @Input() data!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
