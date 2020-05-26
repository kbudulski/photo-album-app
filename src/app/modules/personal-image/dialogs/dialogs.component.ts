import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '../../../core/service/image.service';

@Component({
  selector: 'app-file-name-change',
  templateUrl: 'file-name-change-dialog.html',
})
export class FileNameChangeComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, private imageService: ImageService) {
  }

  saveNameToDatabase() {
    this.imageService.changeImageName(this.data.meta.id, this.data.meta.name);
  }
}
