import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home.component'),
  },
  {
    path: 'donation',
    loadComponent: () => import('./features/donation.component'),
  },
  {
    path: 'demo',
    loadComponent: () => import('./features/demo.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
