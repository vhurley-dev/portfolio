import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOptimisedComponent } from './gallery-optimised.component';

describe('GalleryOptimisedComponent', () => {
  let component: GalleryOptimisedComponent;
  let fixture: ComponentFixture<GalleryOptimisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryOptimisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryOptimisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
