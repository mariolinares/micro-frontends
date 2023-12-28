import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'vass-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <button mat-raised-button (click)="titleEmit.emit(title)" [color]="color">
      {{ title }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() title = 'Mario';

  @Output() titleEmit = new EventEmitter<string>();
  auth = inject(AuthService);
}
