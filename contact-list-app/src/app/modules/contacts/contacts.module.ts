import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { MatListModule } from '@angular/material/list';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactsDirectoryComponent } from './contacts-directory/contacts-directory.component';


@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    ContactsRoutingModule,
    ContactsListComponent,
    ContactsGridComponent,
    ContactsDirectoryComponent,
    ContactCardComponent,
    MatListModule
  ]
})
export class ContactsModule { }
