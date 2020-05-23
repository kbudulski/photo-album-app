import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGalleryComponent } from './personal-gallery.component';

describe('PersonalGalleryComponent', () => {
  let component: PersonalGalleryComponent;
  let fixture: ComponentFixture<PersonalGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
