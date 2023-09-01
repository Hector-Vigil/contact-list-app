import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableComponent } from './editable.component';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditableComponent', () => {
  let component: EditableComponent;
  let fixture: ComponentFixture<EditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditableComponent, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show input when editing and is not bio', () => {
    component.isEditing = true;
    component.large = false;
    fixture.detectChanges();

    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('input'));

    expect(inputDebug).not.toBeUndefined();
  });

  it('should show input when editing and is bio', () => {
    component.isEditing = true;
    component.large = true;
    fixture.detectChanges();

    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('textarea'));

    expect(inputDebug).not.toBeUndefined();
  });

  it('should show p text when not editing', () => {
    component.isEditing = false;
    fixture.detectChanges();

    const componentDebug = fixture.debugElement;
    const inputDebug = componentDebug.query(By.css('p'));

    expect(inputDebug).not.toBeUndefined();
  });

  it('should update the value by changing the text', () => {
    component.isEditing = true;
    fixture.detectChanges();
    const componentDebug = fixture.debugElement;

    const inputDebug = componentDebug.query(By.css('input'));

    const inputElement = inputDebug.nativeElement;

    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.value).toBe('test');
  });
});
