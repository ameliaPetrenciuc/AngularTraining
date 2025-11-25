import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../../presentational/login-form/login-form';
import { AuthService } from '../../../../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly errorMessage = signal<string | null>(null);

  readonly loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  protected onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.getRawValue();
    
    this.errorMessage.set(null);
    this.authService.login(username || '', password || '').subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
         console.error('Login failed', err);
         if (err.status === 401) {
           this.errorMessage.set('The Username or Password is incorrect. Try again!');
         } else {
           this.errorMessage.set('An error has occurred!');
         }
      }
    });
  }
}

  
