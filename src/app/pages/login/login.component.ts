import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailRegexp)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  loginEmail() {
    this.authService.emailLogin(this.email?.value, this.password?.value);
  }

  registerEmail() {
    this.authService.registerEmail(this.email?.value, this.password?.value);
  }

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  loginWithGithub() {
    this.authService.githubLogin();
  }
}
