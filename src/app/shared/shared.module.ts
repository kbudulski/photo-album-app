import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCloudUploadAlt,
  faHome,
  faImage,
  faSignInAlt,
  faSignOutAlt,
  faUpload,
  faUserCircle,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faBars,
      faAngular,
      faSignInAlt,
      faSignOutAlt,
      faUpload,
      faHome,
      faImage,
      faUserCircle,
      faCloudUploadAlt,
      faUserFriends
    );
  }
}
