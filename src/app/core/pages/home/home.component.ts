import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, CardModule, MenubarModule, ToggleButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mobileMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/']
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
      routerLink: ['/features']
    },
    {
      label: 'Pricing',
      icon: 'pi pi-dollar',
      routerLink: ['/pricing']
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: ['/about']
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: ['/contact']
    }
  ];

  pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small stores',
      features: [
        'Up to 100 products',
        'Basic inventory management',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1000 products',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large operations',
      features: [
        'Unlimited products',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  clients = [
    { name: 'MediCare Plus', logo: '🏥' },
    { name: 'HealthFirst', logo: '💊' },
    { name: 'PharmaCorp', logo: '⚕️' },
    { name: 'Wellness Hub', logo: '🏥' },
    { name: 'CareMax', logo: '💉' },
    { name: 'HealthLink', logo: '🩺' }
  ];

  bannerQuote = "Empowering Healthcare Stores with Smart Management Solutions";
  bannerSubtext = "Join thousands of healthcare providers who trust our platform to streamline their operations and grow their business.";

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
