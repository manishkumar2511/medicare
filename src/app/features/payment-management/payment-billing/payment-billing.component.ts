import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-payment-billing',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './payment-billing.component.html',
  styleUrls: ['./payment-billing.component.scss']
})
export class PaymentBillingComponent {
  @Input() plan: any;

  paymentMethods = [
    { name: 'Credit Card', icon: 'pi pi-credit-card' },
    { name: 'PayPal', icon: 'pi pi-paypal' },
    { name: 'Google Pay', icon: 'pi pi-google' },
    { name: 'Apple Pay', icon: 'pi pi-apple' }
  ];
  selectedMethod = this.paymentMethods[0];

  constructor(private router: Router, private route: ActivatedRoute) {
    const nav = this.router.getCurrentNavigation();
    if (!this.plan && nav?.extras.state?.['plan']) {
      this.plan = nav.extras.state['plan'];
      return;
    }

    const planName = this.route.snapshot.queryParamMap.get('plan');
    if (planName) {
      const map: any = {
        Basic: { name: 'Basic', price: '₹499', period: '/mo', description: 'Up to 100 Products' },
        Pro: { name: 'Pro', price: '₹999', period: '/mo', description: 'Up to 1000 Products' },
        Enterprise: { name: 'Enterprise', price: 'Contact Us', period: '', description: 'Unlimited Products' }
      };
      this.plan = map[planName] || { name: planName, price: '', period: '', description: '' };
    }
  }

  selectMethod(method: any) {
    this.selectedMethod = method;
  }

  payNow() {
    alert('Payment processed!');
  }
}
