import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './page/upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [UploadComponent],
  exports: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatProgressBarModule
  ]
})
export class UploadModule { }
