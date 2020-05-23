import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalGalleryComponent } from './page/personal-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalGalleryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalGalleryRoutingModule {}
