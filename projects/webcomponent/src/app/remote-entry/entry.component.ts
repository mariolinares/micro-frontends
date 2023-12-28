import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'angular-module-root',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class RemoteEntryComponent implements OnInit {
  auth = inject(AuthService);
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements
  }
}
