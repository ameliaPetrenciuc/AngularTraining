import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoView } from '../../presentational/user-info-view/user-info-view';
import { AuthService } from '../../../../../services/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [UserInfoView, AsyncPipe],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  private readonly router = inject(Router);
  protected authService = inject(AuthService);
  isProfileOpen = signal(false);
  
  protected onLogin() {
    this.router.navigate(['/auth/login']);    
  }

  protected onLogout() {
    this.authService.logout();
  }

  protected onProfileClick() {
    this.isProfileOpen.set(true);
  }

  protected onCloseProfile() {
    this.isProfileOpen.set(false);
  }
}
