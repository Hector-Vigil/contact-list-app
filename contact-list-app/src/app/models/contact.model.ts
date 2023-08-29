import { IContact } from '../interfaces/contact.interface';

export class Contact {
  _id: string;
  name: string;
  address: string;
  phoneNumber: string;
  photoUrl: string|null;

  constructor(contact: IContact) {
    const { _id, name, phone, bio, photoUrl } = contact;
    this._id = _id;
    this.name = name;
    this.address = phone;
    this.phoneNumber = bio;
    this.photoUrl = photoUrl;
  }
}
