import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-info-view',
  standalone: true,
  imports: [],
  templateUrl: './user-info-view.html',
  styleUrl: './user-info-view.scss',
})
export class UserInfoView {
  user = input<any>(null); 
  loginClicked = output<void>();
  logoutClicked = output<void>();
  isOpen = input<boolean>(false);
  profileClicked = output<void>(); 
  closeClicked = output<void>();
}
