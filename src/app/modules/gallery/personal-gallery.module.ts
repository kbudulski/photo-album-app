import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalGalleryRoutingModule } from './personal-gallery-routing.module';
import { PersonalGalleryComponent } from './page/personal-gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [PersonalGalleryComponent],
  imports: [
    CommonModule,
    PersonalGalleryRoutingModule,
    NgxMasonryModule,
    MaterialModule
  ]
})
export class PersonalGalleryModule { }
