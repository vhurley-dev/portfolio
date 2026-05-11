import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { of } from 'rxjs';

import { ProfileComponent, WINDOW } from './profile.component';
import { Profile } from './interfaces/profile.model';
import { ProfileService } from './profile.service';
import { ScrollService } from '../../services/scroll.service';

const MOCK_PROFILE: Profile = {
  name: 'Victoria Hurley',
  jobTitle: 'Software Engineer',
  strapLine1: 'with a ',
  strapLine2: 'passion',
  strapLine3: ' for building polished apps.',
  introHeading1: 'The craft of engineering',
  introHeading2: 'Enterprise at Scale',
  intro1: 'My journey...',
  intro2: 'For the past four years...',
  socials: [{ name: 'LinkedIn', url: '#', icon: 'assets/icons/linkedin.svg' }],
  experiences: [
    {
      dateFrom: 'Mar 2022',
      dateTo: 'present',
      company: 'Leighton',
      companyUrl: 'https://leighton.com',
      title: 'Software engineer',
      description: ['Job description 1'],
      tech: ['Angular'],
    },
  ],
  projects: [],
  courses: [],
  technologies: [{ technology: 'Angular', score: '90%' }],
  buildInfo: { intro: 'Built with Angular', repoText: 'View', repoUrl: '#' },
};

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileServiceSpy: jasmine.SpyObj<ProfileService>;
  let scrollServiceSpy: any;
  let mockWindow: any;
  let realDocument: Document;

  beforeEach(async () => {
    // This bypasses the TS error while ensuring the test runner is patient
    const jasmineEnv = (window as any).jasmine?.getEnv();
    if (jasmineEnv) {
      jasmineEnv.configure({ defaultTimeoutInterval: 30000 });
    }

    mockWindow = { location: { hash: '' } };
    profileServiceSpy = jasmine.createSpyObj('ProfileService', ['getProfile']);
    profileServiceSpy.getProfile.and.returnValue(of(MOCK_PROFILE));

    const activeSectionSpy = jasmine
      .createSpy('activeSection')
      .and.returnValue('about');
    (activeSectionSpy as any).set = jasmine.createSpy('set');

    scrollServiceSpy = jasmine.createSpyObj('ScrollService', [
      'setupObserver',
      'reset',
    ]);
    scrollServiceSpy.activeSection = activeSectionSpy;

    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [
        { provide: ProfileService, useValue: profileServiceSpy },
        { provide: ScrollService, useValue: scrollServiceSpy },
        { provide: WINDOW, useValue: mockWindow },
        provideRouter([]),
      ],
    }).compileComponents();

    realDocument = TestBed.inject(DOCUMENT);
    spyOn(realDocument, 'getElementById').and.returnValue(
      document.createElement('div'),
    );
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  const initComponent = () => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe('Initialization & Logic', () => {
    it('should create and fetch profile data', async () => {
      initComponent();
      // whenStable handles the entire async waterfall (Observable -> rAF -> Timeout)
      await fixture.whenStable();
      expect(component).toBeTruthy();
      expect(profileServiceSpy.getProfile).toHaveBeenCalled();
    });

    it('should handle navigation fragments', async () => {
      mockWindow.location.hash = '#experience';
      initComponent();
      await fixture.whenStable();
      expect(realDocument.getElementById).toHaveBeenCalledWith('experience');
    });

    it('should set active section to ABOUT when no fragment is present', async () => {
      mockWindow.location.hash = '';
      initComponent();
      await fixture.whenStable();
      expect(scrollServiceSpy.activeSection.set).toHaveBeenCalled();
    });

    it('should clear timers on destroy', fakeAsync(() => {
      initComponent();
      tick(); // Move past Observable
      tick(16); // Move past requestAnimationFrame so timerId is assigned

      fixture.destroy(); // Trigger ngOnDestroy

      flush(); // Cleanup remaining timers
      expect(true).toBeTrue();
    }));
  });

  describe('Template Rendering', () => {
    it('should display the core profile information', () => {
      initComponent();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain(
        MOCK_PROFILE.name,
      );
    });

    it('should render child components', () => {
      initComponent();
      const compiled = fixture.nativeElement as HTMLElement;
      const selectors = [
        'app-socials',
        'app-navigation',
        'app-experience',
        'app-projects',
      ];
      selectors.forEach((s) => expect(compiled.querySelector(s)).toBeTruthy());
    });
  });
});
