import { Contact } from 'src/app/models/contact.model';
import { randomUUID, randomPhoneNumber } from './utils.functions';

export const contacts: Contact[] = [
  new Contact({
    id: randomUUID(),
    name: 'Armand',
    phone: randomPhoneNumber(),
    bio:"some biography",
    photoUrl: undefined
  }),
  new Contact({
    id: randomUUID(),
    name: 'Ivette',
    phone: randomPhoneNumber(),
    bio:"some biography"
  }),
  new Contact({
    id: randomUUID(),
    name: 'Brandon',
    phone: randomPhoneNumber(),
    bio:"some biography"
  }),
  new Contact({
    id: randomUUID(),
    name: 'Janet',
    phone: randomPhoneNumber(),
    bio:"some biography"
  }),
  new Contact({
    id: randomUUID(),
    name: 'Charles',
    phone: randomPhoneNumber(),
    bio:"some biography"
  })
];
