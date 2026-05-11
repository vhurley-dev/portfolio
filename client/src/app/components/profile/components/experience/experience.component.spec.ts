import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { Experience } from '../../interfaces/profile.model';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('experiences', []);
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should render a container for each experience', () => {
    const dummyExperiences: Partial<Experience>[] = [
      { company: 'company name 1' },
      { company: 'company name 2' },
    ];
    fixture.componentRef.setInput('experiences', dummyExperiences);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const experiences = compiled.querySelectorAll('.container');
    expect(experiences.length).toEqual(dummyExperiences.length);
  });
});
