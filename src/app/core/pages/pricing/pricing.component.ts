
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans = [
    {
      name: 'Basic',
      price: '₹499',
      period: '/mo',
      description: 'Up to 100 Products, Email Support, Basic Analytics',
      features: ['Up to 100 Products', 'Email Support', 'Basic Analytics']
    },
    {
      name: 'Pro',
      price: '₹999',
      period: '/mo',
      description: 'Up to 1000 Products, Priority Email & Chat Support, Advanced Analytics, Custom Reports',
      features: ['Up to 1000 Products', 'Priority Email & Chat Support', 'Advanced Analytics', 'Custom Reports']
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      period: '',
      description: 'Unlimited Products, Dedicated Account Manager, Custom Integrations, 24/7 Support',
      features: ['Unlimited Products', 'Dedicated Account Manager', 'Custom Integrations', '24/7 Support']
    }
  ];

  constructor(private router: Router) {}

  selectPlan(plan: any) {
    // include the plan name in the URL so the payment page can be linked/bookmarked
    this.router.navigate(['/payment-management/payment-billing'], { queryParams: { plan: plan.name }, state: { plan } });
  }
}
