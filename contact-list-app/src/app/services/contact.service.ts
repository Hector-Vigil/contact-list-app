import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateContact } from '../interfaces/contact.interface';
import { Contact } from '../models/contact.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService<Contact, ICreateContact> {
  constructor(override http: HttpClient) {
    super('/contacts', http);
  }
}
