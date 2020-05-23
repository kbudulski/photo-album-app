import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../../../core/service/image.service';
import { Observable } from 'rxjs';
import { ImageModel } from '../../../data/schema/image.model';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personal-gallery',
  templateUrl: './personal-gallery.component.html',
  styleUrls: ['./personal-gallery.component.scss']
})
export class PersonalGalleryComponent implements OnInit, OnChanges {

  images: Observable<ImageModel[]>;

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    percentPosition: false,
    fitWidth: true,
  };

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }
}
