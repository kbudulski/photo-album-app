import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedGalleryComponent } from './page/shared-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: SharedGalleryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedGalleryRoutingModule {}
