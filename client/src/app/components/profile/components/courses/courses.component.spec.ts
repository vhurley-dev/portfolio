import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { Course } from './../../interfaces/profile.model';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  const createMockCourses = (count: number): Course[] =>
    Array(count)
      .fill(null)
      .map((_, i) => ({
        title: `Course ${i + 1}`,
        provider: 'Udemy',
        dateCompleted: '1st June 2025',
        certificateURL: 'url',
      }));

  const MOCK_SHORT_COURSES = createMockCourses(6);
  const MOCK_LONG_COURSES = createMockCourses(10);

  const getButton = () =>
    fixture.nativeElement.querySelector('.show-courses-button');

  const getCourses = () =>
    fixture.nativeElement.querySelectorAll('.course-item');

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

  describe('When there are 6 or fewer courses', () => {
    it('should not show the "Show All" button', () => {
      fixture.componentRef.setInput('courses', MOCK_SHORT_COURSES);
      fixture.detectChanges();
      expect(getCourses().length).toEqual(6);
      expect(getButton()).toBeNull();
    });
  });

  describe('When there are more than 6 courses', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('courses', MOCK_LONG_COURSES);
      fixture.detectChanges();
    });

    it('should show the correct initial state', () => {
      expect(getButton().textContent.trim()).toEqual('Show All');
      expect(getCourses().length).toEqual(6);
    });

    it('should toggle showAll when clicked', () => {
      getButton().click();
      fixture.detectChanges();

      expect(getButton().textContent.trim()).toEqual('Show Less');
      expect(getCourses().length).toBe(MOCK_LONG_COURSES.length);
    });
  });
});
