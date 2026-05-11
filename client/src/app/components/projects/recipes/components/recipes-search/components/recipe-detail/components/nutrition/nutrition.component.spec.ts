import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionComponent } from './nutrition.component';

describe('NutritionComponent', () => {
  let component: NutritionComponent;
  let fixture: ComponentFixture<NutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const mockNutrition = {
      yield: 1,
      macros: {
        ENERC_KCAL: { quantity: 500 },
        PROCNT: { quantity: 20 },
        CHOCDF: { quantity: 50 },
        FAT: { quantity: 10 },
      },
    };
    component.nutrition = mockNutrition;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
