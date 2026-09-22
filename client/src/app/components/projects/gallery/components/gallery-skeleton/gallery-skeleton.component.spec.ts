import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySkeletonComponent } from './gallery-skeleton.component';

describe('GallerySkeletonComponent', () => {
  let component: GallerySkeletonComponent;
  let fixture: ComponentFixture<GallerySkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
