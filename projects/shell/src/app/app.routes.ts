import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'flights',
  },

  // Add this route:
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule('mfe1', './Module').then((m) => m.HomeModule),
    /* children: [
      {
        path: 'demo',
        loadComponent: () =>
          loadRemoteModule('mfe1', './Demo').then((m) => m.DemoComponent),
      },
      {
        path: 'demo2',
        loadComponent: () =>
          loadRemoteModule('mfe1', './Demo2').then((m) => m.Demo2Component),
      },
    ], */
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
