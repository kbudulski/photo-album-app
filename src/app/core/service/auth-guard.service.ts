import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: Observable<firebase.User>;

  constructor(private ngFireAuth: AngularFireAuth) {
    this.user = ngFireAuth.authState;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return undefined;
  }
}
