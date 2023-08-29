import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsModule } from './modules/contacts/contacts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
