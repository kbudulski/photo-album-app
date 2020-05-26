import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGalleryComponent } from './shared-gallery.component';

describe('SharedGalleryComponent', () => {
  let component: SharedGalleryComponent;
  let fixture: ComponentFixture<SharedGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
