import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDirectoryComponent } from './contacts-directory/contacts-directory.component';
import { ContactsComponent } from './contacts.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: 'contacts',
  component: ContactsComponent,
  children: [
      {
          path: 'list',
          component: ContactsDirectoryComponent
      },
      {
        path: '**',
        redirectTo:'list'
      },
    ]},
    {
        path: 'contact/:id',
        component: ContactPageComponent
    },
    {
      path: '**',
      redirectTo:'contacts/list'
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
