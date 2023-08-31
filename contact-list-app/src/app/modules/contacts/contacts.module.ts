import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MatListModule } from '@angular/material/list';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { ContactsDirectoryComponent } from './contacts-directory/contacts-directory.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    ContactsRoutingModule,
    ContactsGridComponent,
    ContactsDirectoryComponent,
    ContactPageComponent,
    ContactCardComponent,
    ReactiveFormsModule,
    MatListModule
  ]
})
export class ContactsModule { }
