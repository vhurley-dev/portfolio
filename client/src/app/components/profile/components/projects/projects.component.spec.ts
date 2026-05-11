import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { Project } from '../../interfaces/profile.model';
import { provideRouter } from '@angular/router';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('projects', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render project-outer container for each project', () => {
    const dummyProjects: Partial<Project>[] = [
      { title: 'Project 1' },
      { title: 'Project 2' },
    ];
    fixture.componentRef.setInput('projects', dummyProjects);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const projects = compiled.querySelectorAll('.project-outer');

    expect(projects.length).toEqual(dummyProjects.length);
  });
});
