import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get user() {
    return this.auth.user;
  }

  constructor(private auth: AngularFireAuth, private router: Router) {}

  emailLogin(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Authenticated --> LogIn', value);
        this.router.navigate(['/todos']);
      })
      .catch((err) => console.log('Something went wrong: ', err.message));
  }

  registerEmail(email: string, password: string) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Authenticated --> Register', value);
        this.router.navigate(['/todos']);
      })
      .catch((err) => console.log('Something went wrong: ', err.message));
  }

  googleLogin() {
    return this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((value) => {
        console.log('Authenticated  --> Google Login', value);
        this.router.navigate(['/todos']);
      })
      .catch((err) => console.log('Something went wrong: ', err.message));
  }

  githubLogin() {
    return this.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((value) => {
        console.log('Authenticated  --> Github Login', value);
        this.router.navigate(['/todos']);
      })
      .catch((err) => console.log('Something went wrong: ', err.message));
  }

  logout() {
    return this.auth.signOut().then(() => {
      console.log('Signed Out');
    });
  }
}
