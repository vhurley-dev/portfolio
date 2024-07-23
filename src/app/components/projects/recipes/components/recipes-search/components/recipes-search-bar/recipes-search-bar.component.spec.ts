import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSearchBarComponent } from './recipes-search-bar.component';

describe('RecipesSearchBarComponent', () => {
  let component: RecipesSearchBarComponent;
  let fixture: ComponentFixture<RecipesSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
