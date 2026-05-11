import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInfoComponent } from './build-info.component';
import { BuildInfo } from '../../interfaces/profile.model';

describe('BuildInfoComponent', () => {
  let component: BuildInfoComponent;
  let fixture: ComponentFixture<BuildInfoComponent>;

  const MOCK_BUILD_INFO: BuildInfo = {
    intro: 'build info',
    repoText: 'View repo',
    repoUrl: 'https:',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('buildInfo', {});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render build info p', () => {
    fixture.componentRef.setInput('buildInfo', MOCK_BUILD_INFO);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const repoLink = compiled.querySelector('.large-link');
    expect(repoLink.innerText).toBe(MOCK_BUILD_INFO.repoText);
  });
});
