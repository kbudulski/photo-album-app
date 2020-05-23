import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { UserModel } from '../../data/schema/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userId: string;

  constructor(public ngAuth: AngularFireAuth, private router: Router, public snackBar: MatSnackBar) {
    this.user = ngAuth.authState;
    this.updateUserId();
  }

  loginEmail(user: UserModel) {
    return this.ngAuth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.updateUserId();
    })
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.snackBar.open(error.message, '', {
          panelClass: ['warning-snackbar'],
          duration: 3500,
        });
      });
  }

  updateUserId() {
    this.ngAuth.user.subscribe(userData => {
      if (userData) {
        this.userId = userData.uid;
        localStorage.setItem('uid', this.userId);
      } else {
        localStorage.removeItem('uid');
      }
    });

  }

  loginGoogle() {
    this.ngAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => this.router.navigate(['/gallery']));
  }

  logout() {
    this.ngAuth.signOut().then(() => {
      this.router.navigate(['auth/login']);
    });
    this.userId = null;
    localStorage.removeItem('uid');
  }

  registerEmail(user: UserModel) {
    this.ngAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => this.router.navigate(['/auth/login']))
      .catch(error => {
        this.snackBar.open(error.message, '', {
          panelClass: ['warning-snackbar'],
          duration: 3500,
        });
      });
  }

  isLoggedIn() {
    return this.ngAuth.authState.pipe(first()).toPromise();
  }
}
