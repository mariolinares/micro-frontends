import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ToggleComponent } from 'projects/webcomponent/src/app/toggle.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ToggleComponent],
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
