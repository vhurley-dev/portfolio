import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';
import { SectionEnums } from '../components/profile/enums/sections.enum';

describe('ScrollService', () => {
  let service: ScrollService;
  let capturedCallback: IntersectionObserverCallback;
  let observeSpy: jasmine.Spy;
  let disconnectSpy: jasmine.Spy;
  let constructorCallCount: number;

  beforeEach(() => {
    observeSpy = jasmine.createSpy('observe');
    disconnectSpy = jasmine.createSpy('disconnect');
    constructorCallCount = 0;
    capturedCallback = undefined!;

    (window as any).IntersectionObserver = function (
      this: any,
      callback: IntersectionObserverCallback,
    ) {
      constructorCallCount++;
      capturedCallback = callback;
      this.observe = observeSpy;
      this.disconnect = disconnectSpy;
    };

    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise activeSection to ABOUT', () => {
    expect(service.activeSection()).toBe(SectionEnums.ABOUT);
  });

  describe('reset()', () => {
    it('should reset activeSection to ABOUT', () => {
      service.activeSection.set(SectionEnums.EXPERIENCE);
      service.reset();
      expect(service.activeSection()).toBe(SectionEnums.ABOUT);
    });

    it('should disconnect the observer if one exists', () => {
      service.setupObserver([]);
      service.reset();
      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('should not throw when called before setupObserver', () => {
      expect(() => service.reset()).not.toThrow();
    });
  });

  describe('setupObserver()', () => {
    it('should create an IntersectionObserver', () => {
      service.setupObserver([]);
      expect(constructorCallCount).toBe(1);
    });

    it('should disconnect the existing observer before creating a new one', () => {
      service.setupObserver([]);
      service.setupObserver([]);
      expect(disconnectSpy).toHaveBeenCalledTimes(1);
      expect(constructorCallCount).toBe(2);
    });

    it('should observe elements that exist in the DOM', () => {
      const el = document.createElement('div');
      el.id = 'about-me';
      document.body.appendChild(el);

      service.setupObserver(['about-me']);

      expect(observeSpy).toHaveBeenCalledWith(el);

      document.body.removeChild(el);
    });

    it('should not call observe for element IDs that do not exist in the DOM', () => {
      service.setupObserver(['non-existent-id']);
      expect(observeSpy).not.toHaveBeenCalled();
    });

    it('should only observe elements that exist when given a mixed list', () => {
      const el = document.createElement('div');
      el.id = 'experience';
      document.body.appendChild(el);

      service.setupObserver(['experience', 'non-existent-id']);

      expect(observeSpy).toHaveBeenCalledTimes(1);
      expect(observeSpy).toHaveBeenCalledWith(el);

      document.body.removeChild(el);
    });
  });

  describe('IntersectionObserver callback', () => {
    beforeEach(() => {
      service.setupObserver([]);
    });

    it('should update activeSection when an entry is intersecting', () => {
      const entry = { isIntersecting: true, target: { id: 'experience' } };
      capturedCallback(
        [entry] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
      expect(service.activeSection()).toBe('experience');
    });

    it('should not update activeSection when an entry is not intersecting', () => {
      service.activeSection.set(SectionEnums.PROJECTS);
      const entry = { isIntersecting: false, target: { id: 'experience' } };
      capturedCallback(
        [entry] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
      expect(service.activeSection()).toBe(SectionEnums.PROJECTS);
    });

    it('should process multiple entries and only apply the intersecting one', () => {
      const entries = [
        { isIntersecting: false, target: { id: 'experience' } },
        { isIntersecting: true, target: { id: 'courses' } },
      ];
      capturedCallback(
        entries as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
      expect(service.activeSection()).toBe('courses');
    });
  });
});
