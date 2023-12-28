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
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="toggle" [class.active]="active" (click)="toggle()">
      <slot></slot>
      {{ title }}
    </div>
  `,
  styles: [
    `
      .toggle {
        padding: 10px;
        border: solid black 1px;
        cursor: pointer;
        display: inline;
      }

      .active {
        background-color: lightsteelblue;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ToggleComponent {
  @Input() active = false;
  @Input() title = '';

  @Output() change = new EventEmitter<boolean>();
  auth = inject(AuthService);

  toggle(): void {
    this.active = !this.active;
    this.change.emit(this.active);
  }
}
