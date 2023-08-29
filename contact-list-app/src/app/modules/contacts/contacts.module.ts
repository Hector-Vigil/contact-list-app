import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ContactsListComponent,
    MatListModule
  ]
})
export class ContactsModule { }
