import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCalculatorComponent } from './recipe-calculator.component';

describe('RecipeCalculatorComponent', () => {
  let component: RecipeCalculatorComponent;
  let fixture: ComponentFixture<RecipeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
