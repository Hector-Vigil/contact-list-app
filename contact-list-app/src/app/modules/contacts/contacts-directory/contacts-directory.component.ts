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
  moreNotLoaded: boolean = true;
  searchQuery: string[] = [];


  constructor(private contactService: ContactService,private router: Router) {}

  ngOnInit(): void {
    this.updateContacts();
  }

  updateContacts(limit:string[]=['12'],queries: string[] = []) {
    this.contactService.getItems(limit).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  handleContactClick = (id:string) =>{
    this.router.navigate([`/contact/${id}`],{ state:{id:id}})
  }

  handleAddContactClick = () =>{
    this.router.navigate([`/contact/create`])
  }

  handleOnSearch = (query: string[]=[],limit:string[]=['12'],) => {
    this.searchQuery = query;
    this.contactService.getItems(this.moreNotLoaded?limit:[],query).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  handleLoadMoreContacts = (limit:string[]=['12']) => {
    this.contactService.getItems(this.moreNotLoaded?[]:limit,this.searchQuery).subscribe((contacts) => {
      this.contacts = contacts;
    });
    this.moreNotLoaded = false;
  }

  changeView():void {
    this.gridEnabled = !this.gridEnabled;
  }

}
