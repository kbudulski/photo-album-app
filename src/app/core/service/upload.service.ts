import { Injectable } from '@angular/core';
import { Upload } from '../../data/schema/upload';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private rootPath = '/uploads';
  private task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  snapshot: Observable<any>;
  generatedUrl: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
  }

  pushUpload(upload: Upload) {
    const filePath = `${this.rootPath}/${new Date().getTime()}_${upload.file.name}`;
    const ref = this.storage.ref(filePath);
    this.task = ref.put(upload.file);

    this.uploadPercent = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.pipe(
      finalize(async () => {
        this.generatedUrl = await ref.getDownloadURL().toPromise();
        this.saveToDatabase(upload);
      }),
    ).subscribe();
  }

  saveToDatabase(upload) {
    const userId = localStorage.getItem('uid');
    this.db.collection('uploads').add({
      id: this.db.createId(),
      name: upload.name,
      type: upload.type,
      size: upload.size,
      createdOn: upload.createdOn,
      url: this.generatedUrl,
      userId,
      shared: false
    }).catch(error => console.log(error));
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
