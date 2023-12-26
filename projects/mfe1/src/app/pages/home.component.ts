import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  auth = inject(AuthService);

  ngOnInit(): void {
    console.log('home', this.auth.userName);
  }
}
