import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'medicare-theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';
  private platformId = inject(PLATFORM_ID);
  private readonly isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  // Signal for reactive theme state
  public isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.isDarkMode());
    }
  }

  private getInitialTheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false; // Default to light theme on server
    }
    if (!this.isBrowser) return false;
    try {
      const savedTheme = window.localStorage.getItem(this.THEME_KEY);
      if (savedTheme) {
        return savedTheme === this.DARK_THEME;
      }
    } catch (e) {
      console.warn('ThemeService: unable to read localStorage', e);
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public toggleTheme(): void {
    const newTheme = !this.isDarkMode();
    this.isDarkMode.set(newTheme);
    this.applyTheme(newTheme);
    
    if (isPlatformBrowser(this.platformId)) {
      if (this.isBrowser) {
        try {
          window.localStorage.setItem(this.THEME_KEY, newTheme ? this.DARK_THEME : this.LIGHT_THEME);
        } catch (e) {
          console.warn('ThemeService: unable to write localStorage', e);
        }
      }
    }
  }

  private applyTheme(isDark: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const theme = isDark ? this.DARK_THEME : this.LIGHT_THEME;
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('dark-theme', isDark);
  }

  public getCurrentTheme(): string {
    return this.isDarkMode() ? this.DARK_THEME : this.LIGHT_THEME;
  }
}
