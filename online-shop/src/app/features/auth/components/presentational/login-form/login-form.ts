import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, ReactiveFormsModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  readonly formGroup = input.required<FormGroup>();
  readonly errorMessage = input<string | null>(null);
  readonly login = output<void>();
}
