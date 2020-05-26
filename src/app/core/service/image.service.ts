import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../../data/schema/image.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Upload } from '../../data/schema/upload';
import { AuthService } from './auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uploadsCol: AngularFirestoreCollection<ImageModel>;
  uploads: Observable<ImageModel[]>;
  upload: Observable<ImageModel>;
  userIdLocal = localStorage.getItem('uid');

  constructor(private db: AngularFirestore, private storage: AngularFireStorage,
              private authService: AuthService, private router: Router) {
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
    this.db.collection('uploads')
      .doc(id).update({name});
  }

  deleteImage(id: string, url: string) {
    this.db.collection('uploads').doc(id).delete();
    this.storage.storage.refFromURL(url).delete();
    this.router.navigate(['gallery']);
  }
}
