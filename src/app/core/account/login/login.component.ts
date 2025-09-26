import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit(): void {
    this.message = '';
    const res = this.auth.login(this.email, this.password);
    if (!res.success) {
      this.message = res.message || 'Login failed';
      return;
    }
    // navigate away on success
    this.router.navigate(['/home']);
  }
}
