import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ImageService } from '../../../core/service/image.service';
import { Upload } from '../../../data/schema/upload';
import { MatDialog } from '@angular/material/dialog';
import { FileNameChangeComponent } from '../dialogs/dialogs.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
              private imageService: ImageService,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: Upload,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onShareImage() {
    this.imageService.shareImage(this.data.id);
    this.bottomSheetRef.dismiss();
  }

  onHideImage() {
    this.imageService.hideImage(this.data.id);
    this.bottomSheetRef.dismiss();
  }

  onChangeImageName() {
    const meta = this.data;
    const dialogRef = this.dialog.open(FileNameChangeComponent, {
      width: '250px',
      data: {meta}
    });
    this.bottomSheetRef.dismiss();
  }
}
