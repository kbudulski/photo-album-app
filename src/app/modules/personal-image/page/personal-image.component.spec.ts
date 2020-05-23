import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalImageComponent } from './personal-image.component';

describe('PersonalImageComponent', () => {
  let component: PersonalImageComponent;
  let fixture: ComponentFixture<PersonalImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
