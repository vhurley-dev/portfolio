import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesHeaderComponent } from './recipes-header.component';
import { provideRouter } from '@angular/router';

describe('RecipesHeaderComponent', () => {
  let component: RecipesHeaderComponent;
  let fixture: ComponentFixture<RecipesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesHeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
