import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDirectoryComponent } from './contacts-directory.component';

describe('ContactDirectoryComponent', () => {
  let component: ContactsDirectoryComponent;
  let fixture: ComponentFixture<ContactsDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
