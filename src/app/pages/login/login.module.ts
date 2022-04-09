import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
})
export class LoginModule {}
