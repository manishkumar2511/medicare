import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export type UserRole = 'SuperAdmin' | 'StoreAdmin' | 'StoreStaff';

export interface AppUser {
  email: string;
  password: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USERS_KEY = 'medicare_users';
  private readonly CURRENT_USER = 'medicare_current_user';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  // reactive current user - initialize null to avoid calling browser APIs during SSR
  public currentUser = signal<AppUser | null>(null);

  constructor(private router: Router) {
    // Only access localStorage on the browser (double-check both Angular helper and window existence)
    if (isPlatformBrowser(this.platformId) && this.isBrowser) {
      try {
        const users = this.loadUsers();
        if (!users || users.length === 0) {
          const defaultUser: AppUser = { email: 'superadmin@yopmail.com', password: 'SuperAdmin123@', role: 'SuperAdmin' };
          this.saveUsers([defaultUser]);
        }
        // set current user from storage (if any)
        const cu = this.loadCurrentUser();
        this.currentUser.set(cu);
      } catch (e) {
        // swallow errors in SSR environment
        console.warn('AuthService constructor skipped localStorage access in non-browser environment', e);
      }
    }
  }

  private loadUsers(): AppUser[] {
    if (!isPlatformBrowser(this.platformId) || !this.isBrowser) return [];
    try {
      const raw = window.localStorage.getItem(this.USERS_KEY);
      return raw ? JSON.parse(raw) as AppUser[] : [];
    } catch (e) {
      console.error('AuthService loadUsers parse error', e);
      return [];
    }
  }

  private saveUsers(users: AppUser[]): void {
    if (!isPlatformBrowser(this.platformId) || !this.isBrowser) return;
    try {
      window.localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.warn('AuthService saveUsers failed', e);
    }
  }

  private loadCurrentUser(): AppUser | null {
    if (!isPlatformBrowser(this.platformId) || !this.isBrowser) return null;
    try {
      const raw = window.localStorage.getItem(this.CURRENT_USER);
      return raw ? JSON.parse(raw) as AppUser : null;
    } catch (e) {
      return null;
    }
  }

  private saveCurrentUser(user: AppUser | null): void {
    if (!isPlatformBrowser(this.platformId) || !this.isBrowser) {
      this.currentUser.set(user);
      return;
    }
    try {
      if (user) {
        window.localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
      } else {
        window.localStorage.removeItem(this.CURRENT_USER);
      }
    } catch (e) {
      console.warn('AuthService saveCurrentUser failed', e);
    }
    this.currentUser.set(user);
  }

  public register(user: AppUser): { success: boolean; message?: string } {
    const users = this.loadUsers();
    if (users.find(u => u.email.toLowerCase() === user.email.toLowerCase())) {
      return { success: false, message: 'User with this email already exists' };
    }
    users.push(user);
    this.saveUsers(users);
    return { success: true };
  }

  public login(email: string, password: string): { success: boolean; message?: string } {
    const users = this.loadUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) {
      return { success: false, message: 'Invalid credentials' };
    }
    this.saveCurrentUser(found);
    return { success: true };
  }

  public logout(): void {
    this.saveCurrentUser(null);
    this.router.navigate(['/home']);
  }

  public isSuperAdmin(): boolean {
    return !!(this.currentUser() && this.currentUser()!.role === 'SuperAdmin');
  }

  public getCurrentUser(): AppUser | null {
    return this.currentUser();
  }
}
