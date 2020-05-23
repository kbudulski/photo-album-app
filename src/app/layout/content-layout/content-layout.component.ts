import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from '../../core/service/auth.service';
import { UploadService } from '../../core/service/upload.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  user: Observable<firebase.User>;
  sideNavMenu = [
    {link: '/home', title: 'Home', icon: 'home'},
    {link: '/gallery', title: 'Gallery', icon: 'image'},
    {link: '/shared', title: 'Shared', icon: 'user-friends'},
  ];
  theme = 'default-theme';
  loading = false;

  constructor(private authService: AuthService, public uploadService: UploadService, private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  onLogoutClick() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    document.body.classList.add(this.theme, 'mat-app-background');
  }
}
