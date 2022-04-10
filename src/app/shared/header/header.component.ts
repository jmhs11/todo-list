import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(readonly authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    });
  }
}
