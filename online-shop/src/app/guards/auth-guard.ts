import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getCurrentUser();

  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }

  const expectedRole = route.data['expectedRole'];

  if (expectedRole) {
    if (user.role !== expectedRole) {
      console.warn(`Access denied! Your role is ${user.role}, does not match the required role ${expectedRole}`);
      router.navigate(['/products']);
      return false;
    }
  }

  return true;
};
