import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'payment-billing',
    loadComponent: () => import('./payment-billing/payment-billing.component').then(m => m.PaymentBillingComponent)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentManagementModule {}
