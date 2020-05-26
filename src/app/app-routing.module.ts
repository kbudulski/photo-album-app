import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PersonalImageComponent } from './modules/personal-image/page/personal-image.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToItems)
  },
  {
    path: '',
    component: ContentLayoutComponent,
    ...canActivate(redirectUnauthorizedToLogin),

    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./modules/gallery/personal-gallery.module').then(m => m.PersonalGalleryModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'shared',
        loadChildren: () => import('./modules/shared-gallery/shared-gallery.module').then(m => m.SharedGalleryModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'upload',
        loadChildren: () => import('./modules/upload/upload.module').then(m => m.UploadModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'image/:id',
        loadChildren: () => import('./modules/personal-image/personal-image.module').then(m => m.PersonalImageModule),
        component: PersonalImageComponent,
        ...canActivate(redirectUnauthorizedToLogin)
      },
    ]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
