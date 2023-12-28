import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <my-toggle>Hola</my-toggle>
    <vass-button [color]="'warn'"></vass-button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  auth = inject(AuthService);
}
