import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

import { PricingComponent } from './core/pages/pricing/pricing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', loadComponent: () => import('./core/pages/pricing/pricing.component').then(m => m.PricingComponent) },
  {
    path: 'account',
    loadChildren: () => import('./core/account/account.module').then(m => m.AccountModule)
  },
  { path: '**', redirectTo: '' }
];
