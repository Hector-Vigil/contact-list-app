import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDirectoryComponent } from './contacts-directory.component';
import { ContactsGridComponent } from '../contacts-grid/contacts-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactServiceStub } from 'src/mock/contact.service.mock';
import { contacts } from 'src/mock/contacts.mock';

describe('ContactDirectoryComponent', () => {
  let component: ContactsDirectoryComponent;
  let fixture: ComponentFixture<ContactsDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports:[SharedModule,BrowserAnimationsModule,ContactsDirectoryComponent, ContactsGridComponent, HttpClientTestingModule],
      providers: [{ provide: ContactService, useValue: ContactServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update contacts after ngOnInit', () => {
    component.ngOnInit();
    expect(component.contacts).toEqual(contacts);
  });
});
