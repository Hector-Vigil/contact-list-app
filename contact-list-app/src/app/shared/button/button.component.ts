import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatIconModule,NgIf],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() class: 'large' | 'default' = 'default';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() icon?: boolean=false;

  @Output() onClick = new EventEmitter<void>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.matIconRegistry.addSvgIconInNamespace('img', 'green-plus',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/green-plus.svg'));
  }

  handleOnClick() {
    this.onClick.emit();
  }
}
