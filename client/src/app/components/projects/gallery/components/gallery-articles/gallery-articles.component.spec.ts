import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArticlesComponent } from './gallery-articles.component';

describe('GalleryArticlesComponent', () => {
  let component: GalleryArticlesComponent;
  let fixture: ComponentFixture<GalleryArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
