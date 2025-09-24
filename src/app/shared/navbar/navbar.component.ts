import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../core/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  mobileMenuOpen = false;
  constructor(public themeService: ThemeService, private router: Router) {}
    closeMenu(): void {
      if (this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
      }
    }
    navigateToHome(): void {
    this.router.navigate(['/home']);
    this.closeMenu();
  }
  navigateToLogin(): void {
    this.router.navigate(['/account/login']);
    this.closeMenu();
  }
  navigateToRegister(): void {
    this.router.navigate(['/account/register']);
    this.closeMenu();
  }

  navigateToPricing(): void {
    this.router.navigate(['/pricing']);
    this.closeMenu();
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.closeMenu();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
