import { Component, OnInit } from '@angular/core';
import { InputComponent } from 'src/app/shared/input/input.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { ContactsGridComponent } from '../contacts-grid/contacts-grid.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { Contact } from 'src/app/models/contact.model';
import { NgIf } from '@angular/common';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts-directory',
  templateUrl: './contacts-directory.component.html',
  styleUrls: ['./contacts-directory.component.css'],
  standalone: true,
  imports:[ButtonComponent,InputComponent,ContactsGridComponent,ContactsListComponent,NgIf]
})
export class ContactsDirectoryComponent implements OnInit {
  contacts: Contact[] = [];
  gridEnabled: boolean = true;


  constructor(private contactService: ContactService,private router: Router) {}

  ngOnInit(): void {
    this.updateContacts();
  }

  updateContacts(queries: string[] = []) {
    this.contactService.getItems().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  handleContactClick = (id:string) =>{
    this.router.navigate([`/contact/${id}`],{ state:{id:id}})
  }

  handleAddContactClick = () =>{
    this.router.navigate([`/contact/create`])
  }

  handleOnSearch = (query: string[]) => {
    this.contactService.getItems(query).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  changeView():void {
    this.gridEnabled = !this.gridEnabled;
  }

}
