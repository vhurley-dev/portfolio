import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabComboBoxComponent } from './lab-combo-box.component';

describe('LabComboBoxComponent', () => {
  let component: LabComboBoxComponent;
  let fixture: ComponentFixture<LabComboBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabComboBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
