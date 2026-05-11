import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTabsComponent } from './lab-tabs.component';

describe('LabTabsComponent', () => {
  let component: LabTabsComponent;
  let fixture: ComponentFixture<LabTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabTabsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('tabs', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
