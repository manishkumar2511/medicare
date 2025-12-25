import { Routes } from "@angular/router";
import { authRoutes } from "./features/auth/routes";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'account', children: authRoutes },
  { path: 'pricing', loadComponent: () => import('./features/pricing').then(m => m.PricingComponent) },
  { path: 'payment-management', loadChildren: () => import('./features/payment-management').then(m => m.PaymentManagementModule) },
  { path: 'home', loadComponent: () => import('./core/home').then(m => m.HomeComponent) },
  { path: "**", redirectTo: "/home" },
];