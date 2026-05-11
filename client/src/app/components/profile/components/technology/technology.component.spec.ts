import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyComponent } from './technology.component';
import { Technology } from '../../interfaces/profile.model';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;

  const MOCK_TECH: Technology[] = [
    { technology: 'Angular', score: '10' },
    { technology: 'TypeScript', score: '10' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('technologies', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render a technology container for each technology', () => {
    fixture.componentRef.setInput('technologies', MOCK_TECH);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const technologies = compiled.querySelectorAll('.technology');

    expect(technologies.length).toEqual(MOCK_TECH.length);
  });
});
