import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedGalleryComponent } from './page/shared-gallery.component';
import { SharedGalleryRoutingModule } from './shared-gallery-routing.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [SharedGalleryComponent],
  imports: [
    CommonModule,
    SharedGalleryRoutingModule,
    NgxMasonryModule,
    MaterialModule
  ]
})
export class SharedGalleryModule {
}
