import { of } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { contacts } from './contacts.mock';
import { contact } from './contact.mock';

export const ContactServiceStub: Partial<ContactService> = {
  getItems: () => of(contacts),
  getItemId: (id: string) => of(contact),
  updateItem: (id: string, item: Contact) => {
    const found = contacts.find((c) => c.id == id);
    if (found) Object.assign(found, item);
    return of();
  },
  removeItem: (id: string) => {
    const foundIndex = contacts.findIndex((c) => c.id == id);
    if (foundIndex > -1) contacts.splice(foundIndex, 1);
    return of();
  },
};
