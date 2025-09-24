import { Routes } from '@angular/router';

export const PAYMENT_MANAGEMENT_ROUTES: Routes = [
  {
    path: 'payment-billing',
    loadComponent: () => import('./payment-billing/payment-billing.component').then(m => m.PaymentBillingComponent)
  }
];
