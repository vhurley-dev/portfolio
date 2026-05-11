import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { Course } from './../../interfaces/profile.model';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  const MOCK_COURSES: Course[] = [
    {
      title: 'Course 1',
      provider: 'Udemy',
      dateCompleted: '1st June 2025',
      certificateURL: 'url',
    },
    {
      title: 'Course 2',
      provider: 'Udemy',
      dateCompleted: '15th May 2026',
      certificateURL: 'url',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('courses', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
