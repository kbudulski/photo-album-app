import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../core/service/image.service';
import { ActivatedRoute } from '@angular/router';
import { Upload } from '../../../data/schema/upload';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { AuthService } from '../../../core/service/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-personal-image',
  templateUrl: './personal-image.component.html',
  styleUrls: ['./personal-image.component.scss']
})
export class PersonalImageComponent implements OnInit {

  image: Upload;
  isOwner;

  constructor(private imageService: ImageService, private route: ActivatedRoute,
              private bottomSheet: MatBottomSheet, public authService: AuthService,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    const imageId = this.getImageId();
    this.getImage(imageId);
  }

  getImageId() {
    let id = '';
    this.route.params.subscribe(params => {
      id = params.id;
    });
    return id;
  }

  getImage(id) {
    this.imageService.getImage(id).subscribe(img => {
      this.image = img[0];
      this.isOwner = this.authService.userId === this.image.userId;
    });
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent, { data: this.image});
  }
}
