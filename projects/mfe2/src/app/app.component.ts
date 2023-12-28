import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mfe2';
  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('carga');
  }
}
