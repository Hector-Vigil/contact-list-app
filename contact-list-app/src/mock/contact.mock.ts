import { Contact } from 'src/app/models/contact.model';
import { randomUUID, randomPhoneNumber } from './utils.functions';

export const contact = new Contact({
  id: randomUUID(),
  name: 'Albert',
  phone: randomPhoneNumber(),
  bio: 'This is a bio',
  photoUrl: ""
});
