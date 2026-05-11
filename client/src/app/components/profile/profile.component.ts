import { DOCUMENT } from '@angular/common';
import { Component, inject, signal, InjectionToken } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileService } from './profile.service';

import { Profile } from './interfaces/profile.model';
import { SectionEnums } from './enums/sections.enum';
import { BuildInfoComponent } from './components/build-info/build-info.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ScrollService } from '../../services/scroll.service';
import { SocialsComponent } from './components/socials/socials.component';
import { Subject, takeUntil } from 'rxjs';

/* istanbul ignore next */
export const WINDOW = new InjectionToken<Window>('Window', {
  factory: () => window,
});
@Component({
  selector: 'app-profile',
  imports: [
    NavigationComponent,
    ExperienceComponent,
    TechnologyComponent,
    ProjectsComponent,
    CoursesComponent,
    BuildInfoComponent,
    SocialsComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private document = inject(DOCUMENT);
  private window = inject(WINDOW);
  private destroy$ = new Subject<void>();
  private timerId: any;
  profileService = inject(ProfileService);
  profile = signal<Profile | null>(null);
  scrollService = inject(ScrollService);
  section: typeof SectionEnums = SectionEnums;
  expand = false;

  constructor() {
    this.profileService
      .getProfile()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Profile) => {
        this.profile.set({ ...res });

        requestAnimationFrame(() => {
          this.timerId = setTimeout(() => {
            const sectionIds = Object.values(SectionEnums);
            this.scrollService.setupObserver(sectionIds);

            const fragment = this.window.location.hash.replace('#', '');
            if (fragment) {
              this.document
                .getElementById(fragment)
                ?.scrollIntoView({ behavior: 'smooth' });
            } else {
              this.scrollService.activeSection.set(SectionEnums.ABOUT);
            }
          }, 100);
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.timerId) {
      clearTimeout(this.timerId); // Stop the pending 100ms logic
    }
  }
}
