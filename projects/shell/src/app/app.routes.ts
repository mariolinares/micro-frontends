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
  },
  {
    path: 'facturas',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Module').then((m) => m.ProductModule),
  },
  {
    path: 'webcomponent',
    loadChildren: () => import('./home/home.routes').then((m) => m.HOME_ROUTES),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
