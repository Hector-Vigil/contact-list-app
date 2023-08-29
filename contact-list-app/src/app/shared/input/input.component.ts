import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type!: 'text' | 'email';
  @Input() name!: string;
  @Input() label!: string;
  @Input() disabled: boolean = false;

  value: string = '';

  onChange: Function = (value: string) => {};
  onTouched: Function = (value: string) => {};

  changeValue(value: string) {
    if (this.value) this.onChange(value);
    this.onTouched();
  }
}
