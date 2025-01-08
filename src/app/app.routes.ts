import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/components/login/login.component').then(
        (a) => a.LoginComponent
      ),
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./pages/components/browse/browse.component').then(
        (a) => a.BrowseComponent
      ),
  },
];
