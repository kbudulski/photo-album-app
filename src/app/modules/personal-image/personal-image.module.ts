import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalImageComponent } from './page/personal-image.component';
import { PersonalImageRoutingModule } from './personal-image-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FileNameChangeComponent } from './dialogs/dialogs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalImageComponent, BottomSheetComponent, FileNameChangeComponent],
  imports: [
    CommonModule,
    PersonalImageRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class PersonalImageModule { }
