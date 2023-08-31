import { IContact } from '../interfaces/contact.interface';

export class Contact {
  id: string;
  name: string;
  phone: string;
  bio: string;
  photoUrl?: string;

  constructor(contact: IContact) {
    const { id, name, phone, bio, photoUrl } = contact;
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.phone = phone;
    this.photoUrl = photoUrl;
  }
}
