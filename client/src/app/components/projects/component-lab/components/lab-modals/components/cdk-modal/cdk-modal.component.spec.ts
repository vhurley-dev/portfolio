import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkModalComponent } from './cdk-modal.component';

describe('CdkModalComponent', () => {
  let component: CdkModalComponent;
  let fixture: ComponentFixture<CdkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
