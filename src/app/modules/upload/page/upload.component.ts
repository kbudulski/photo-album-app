import { Component, OnInit } from '@angular/core';
import { Upload } from '../../../data/schema/upload';
import { UploadService } from '../../../core/service/upload.service';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  files: FileList;
  uploadModel: Upload;
  private uploadIssuesFlag = false;

  constructor(public uploadService: UploadService, public snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onUpload() {
    const filesToUpload = this.files;
    const filesIndexArray = _.range(filesToUpload.length);
    _.each(filesIndexArray, (index) => {
      this.uploadModel = new Upload(filesToUpload[index]);
      this.validateFileType();
    });
    this.onFinish();
  }

  onFinish() {
    const progressBarHtmlElement = document.getElementById('upload-progress-bar');
    setTimeout(() => {
      this.generateFinishSnackBar();
      progressBarHtmlElement.classList.add('animated', 'fadeOut', 'slow');
    }, 1500);
    progressBarHtmlElement.classList.remove('animated', 'fadeOut', 'slow');
  }

  generateFinishSnackBar() {
    if (!this.uploadIssuesFlag) {
      this.snackBar.open('Upload finished.', '', {
        panelClass: ['success-snackbar'],
        duration: 3500,
      });
    } else {
      this.snackBar.open('Upload finished with issues.', '', {
        panelClass: ['success-snackbar'],
        duration: 3500,
      });
    }
  }

  validateFileType() {
    const fileType = this.uploadModel.file.type.split('/')[0];
    if ((fileType) !== 'image') {
      this.snackBar.open('Unsupported file type.', '', {
        panelClass: ['warning-snackbar'],
        duration: 2500,
      });
      this.uploadIssuesFlag = true;
    } else {
      this.uploadService.pushUpload(this.uploadModel);
    }
  }

  uploadFiles($event) {
    this.files = $event.target.files;
    this.onUpload();
  }
}
