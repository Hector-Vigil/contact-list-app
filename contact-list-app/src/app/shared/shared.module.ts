import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { EditableComponent } from './editable/editable.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    EditableComponent
  ]
})
export class SharedModule { }
