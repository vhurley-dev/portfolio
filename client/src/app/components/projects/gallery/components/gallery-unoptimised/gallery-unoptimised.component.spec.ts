import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryUnoptimisedComponent } from './gallery-unoptimised.component';

describe('GalleryUnoptimisedComponent', () => {
  let component: GalleryUnoptimisedComponent;
  let fixture: ComponentFixture<GalleryUnoptimisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryUnoptimisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryUnoptimisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
