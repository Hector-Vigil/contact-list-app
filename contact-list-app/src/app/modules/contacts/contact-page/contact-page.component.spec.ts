import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { ContactPageComponent } from './contact-page.component';
import { contacts } from 'src/mock/contacts.mock';
import { updateFormControls } from 'src/mock/utils.functions';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from 'src/app/shared/button/button.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContactPageComponent, HttpClientTestingModule, BrowserAnimationsModule, RouterTestingModule, ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('all form values are required', () => {
    const controls = component.contactForm.controls;

    for (const key in controls) {
      controls[key].setValue('');
    }
    expect(component.contactForm.valid).toBeFalse();

    updateFormControls(contacts[0],controls)
    expect(component.contactForm.valid).toBeTrue();
  });

  it('phone field validity', () => {
    const phone = component.contactForm.controls['phone'];
    phone.setValue('string value');
    expect(phone.valid).toBeFalsy();
    phone.setValue(contacts[0].phone);
    expect(phone.valid).toBeTruthy();
  });


  it('bio field validity', () => {
    const bio = component.contactForm.controls['bio'];
    const stringLength3 = 'bio';
    bio.setValue(stringLength3);
    expect(bio.valid).toBeFalsy();
    bio.setValue('valid bio');
    expect(bio.valid).toBeTruthy();
  });

  it('should show Edit text when not editing', () => {
    component.editing = false;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const saveAndEditButton = buttons[2].componentInstance as ButtonComponent;
    expect(saveAndEditButton.text).toBe("Edit")
  });
  it('should show Save text when editing', () => {
    component.editing = true;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const saveAndEditButton = buttons[2].componentInstance as ButtonComponent;
    expect(saveAndEditButton.text).toBe("Save")
  });

  it('should not show delete when creating', () => {
    component.id = null;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const arrayOfButtons = buttons.length;
    expect(arrayOfButtons).toBe(3);
  });

  it('should show delete when not creating', () => {
    component.id = contacts[0].id;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;
    const buttons = componentDebug.queryAll(By.directive(ButtonComponent));
    const arrayOfButtons = buttons.length;
    expect(arrayOfButtons).toBe(4);
  });



});
