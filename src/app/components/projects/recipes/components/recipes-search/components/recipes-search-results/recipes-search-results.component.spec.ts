import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSearchResultsComponent } from './recipes-search-results.component';

describe('RecipesSearchResultsComponent', () => {
  let component: RecipesSearchResultsComponent;
  let fixture: ComponentFixture<RecipesSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesSearchResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
