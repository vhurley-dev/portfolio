import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLabComponent } from './component-lab.component';

describe('ComponentLabComponent', () => {
  let component: ComponentLabComponent;
  let fixture: ComponentFixture<ComponentLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
