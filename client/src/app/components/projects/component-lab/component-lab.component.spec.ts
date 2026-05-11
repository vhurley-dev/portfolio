import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLabComponent } from './component-lab.component';
import { provideRouter } from '@angular/router';

describe('ComponentLabComponent', () => {
  let component: ComponentLabComponent;
  let fixture: ComponentFixture<ComponentLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLabComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
