import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateContact } from '../interfaces/contact.interface';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService<Contact, ICreateContact> {
  constructor(override http: HttpClient) {
    super('/contacts', http);
  }

  override getItems(limit:string[]=[],query: string[]=[]): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseEndPoint}`, {
      params: {
        limit: limit,
        query: query
      },
    });
}
}
