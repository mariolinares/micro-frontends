import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'demo' },
      {
        path: 'demo',
        component: DemoComponent,
      },
      {
        path: 'demo2',
        component: Demo2Component,
      },
    ],
  },
];
