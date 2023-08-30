import { Component, OnInit } from '@angular/core';
import { InputComponent } from 'src/app/shared/input/input.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ContactsGridComponent } from '../contacts-grid/contacts-grid.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { IContact } from 'src/app/interfaces/contact.interface';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-contacts-directory',
  templateUrl: './contacts-directory.component.html',
  styleUrls: ['./contacts-directory.component.css'],
  standalone: true,
  imports:[ButtonComponent,InputComponent,ContactsGridComponent,ContactsListComponent,NgIf]
})
export class ContactsDirectoryComponent implements OnInit {
  gridEnabled: boolean = true;


  changeView():void {
    this.gridEnabled = !this.gridEnabled;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
