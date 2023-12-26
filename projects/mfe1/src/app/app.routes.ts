import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  // Add this route:
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'flights',
    loadChildren: () => import('./pages/home.module').then((m) => m.HomeModule),
  },
  /* {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo',
  },
  {
    path: 'demo2',
    component: Demo2Component,
  }, */
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
