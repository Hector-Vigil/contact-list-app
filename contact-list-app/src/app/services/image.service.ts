import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateContact } from '../interfaces/contact.interface';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService extends BaseService<{photoUrl:string}, FormData> {
  constructor(override http: HttpClient) {
    super('/contacts/imageUpload', http);
  }

}
