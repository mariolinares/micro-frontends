import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getTitle(ev: any) {
    console.log(ev.detail);
  }
}
