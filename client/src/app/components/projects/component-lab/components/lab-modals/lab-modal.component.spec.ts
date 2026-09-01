import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabModalComponent } from './lab-modal.component';

describe('LabModalComponent', () => {
  let component: LabModalComponent;
  let fixture: ComponentFixture<LabModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
