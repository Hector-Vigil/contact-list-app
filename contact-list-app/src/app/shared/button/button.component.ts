import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() class: 'large' | 'default' = 'default';
  @Input() type: 'button' | 'submit' = 'button';

  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  handleOnClick() {
    this.onClick.emit();
  }
}
