import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,
  NG_VALUE_ACCESSOR} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, NgIf],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => EditableComponent),
    },
  ],
})
export class EditableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() large: boolean = false;
  @Input() class!: string;
  @Input() label!: string;
  @Input() isEditing: boolean = false;

  value: string = '';

  onChange: Function = (value: string) => {};
  onTouched: Function = (value: string) => {};

  changeValue(value: string) {
    if (value) {
      this.onChange(value);
      this.writeValue(value)
    }
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
