import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from '../../../data/schema/image.model';
import { NgxMasonryOptions } from 'ngx-masonry';
import { ImageService } from '../../../core/service/image.service';

@Component({
  selector: 'app-shared-gallery',
  templateUrl: './shared-gallery.component.html',
  styleUrls: ['./shared-gallery.component.scss']
})
export class SharedGalleryComponent implements OnInit {

  images: Observable<ImageModel[]>;

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
    percentPosition: false,
    fitWidth: true,
  };

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.images = this.imageService.getSharedImages();
  }

}
