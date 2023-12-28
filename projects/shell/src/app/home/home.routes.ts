import { Routes } from '@angular/router';

// Add this import:
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
