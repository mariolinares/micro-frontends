import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@demo/auth';
import { ToggleComponent } from 'projects/webcomponent/src/bootstrap';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterModule, ToggleComponent],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'shell';
  auth = inject(AuthService);

  constructor() {
    this.auth.userName = 'Mario';
  }
}
