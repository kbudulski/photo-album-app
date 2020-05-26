import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ImageService } from '../../../core/service/image.service';
import { Upload } from '../../../data/schema/upload';
import { MatDialog } from '@angular/material/dialog';
import { FileNameChangeComponent } from '../dialogs/dialogs.component';
import * as JsPDF from 'jspdf';

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
    this.dialog.open(FileNameChangeComponent, {
      width: '250px',
      data: {meta}
    });
    this.bottomSheetRef.dismiss();
  }

  onDeleteImage() {
    this.imageService.deleteImage(this.data.id, this.data.url);
    this.bottomSheetRef.dismiss();
  }

  onReport(data: Upload) {
    const fileName = this.getFileName();
    const doc = new JsPDF({format: 'a4'});
    doc.text(10, 20, 'Name: ' + fileName);
    doc.text(10, 30, 'Type: ' + data.type);
    doc.text(10, 40, 'File ID: ' + data.id);
    doc.text(10, 50, 'User ID: ' + data.userId);
    doc.text(10, 60, 'Size: ' + (data.size / (1024 * 1024)).toFixed(2).toString() + ' mb');
    doc.save('report_' + fileName + '.pdf');
  }

  getFileName() {
    return this.data.name.substring(0, this.data.name.lastIndexOf('.'));
  }

}

