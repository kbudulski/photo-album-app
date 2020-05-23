import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../../data/schema/image.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Upload } from '../../data/schema/upload';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uploadsCol: AngularFirestoreCollection<ImageModel>;
  uploads: Observable<ImageModel[]>;
  uploadDoc: AngularFirestoreDocument<ImageModel>;
  upload: Observable<ImageModel>;
  userIdLocal = localStorage.getItem('uid');

  constructor(private db: AngularFirestore, private authService: AuthService) {
  }

  getImages(): Observable<ImageModel[]> {
    const userId = (this.authService.userId ? this.authService.userId : this.userIdLocal);
    this.uploadsCol = this.db.collection('uploads',
      ref => ref.where('userId', '==', userId));
    this.uploads = this.uploadsCol.valueChanges();
    return this.uploads;
  }

  getImage(id) {
    const imageRef = this.db.collection<Upload>('uploads',
      ref => ref.where('id', '==', id));
    return imageRef.valueChanges({idField: 'id'});
  }

  getSharedImages() {
    this.uploadsCol = this.db.collection('uploads',
      ref => ref.where('shared', '==', true));
    this.uploads = this.uploadsCol.valueChanges();
    return this.uploads;
  }

  shareImage(id) {
    this.db.collection('uploads')
      .doc(id).update({shared: true});
  }

  hideImage(id: string) {
    this.db.collection('uploads')
      .doc(id).update({shared: false});
  }

  changeImageName(id: string, name: string) {
    console.log('w service');
    console.log(name);
    this.db.collection('uploads')
      .doc(id).update({name});
  }
}
