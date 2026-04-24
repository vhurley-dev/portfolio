import { Component, inject, signal } from '@angular/core';
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
  profileService = inject(ProfileService);
  profile = signal<Profile | null>(null);
  scrollService = inject(ScrollService);
  section: typeof SectionEnums = SectionEnums;
  expand = false;

  constructor() {
    this.profileService.getProfile().subscribe((res: Profile) => {
      this.profile.set({ ...res });

      requestAnimationFrame(() => {
        setTimeout(() => {
          const sectionIds = Object.values(SectionEnums);
          this.scrollService.setupObserver(sectionIds);

          const fragment = window.location.hash.replace('#', '');
          if (fragment) {
            document
              .getElementById(fragment)
              ?.scrollIntoView({ behavior: 'smooth' });
          } else {
            this.scrollService.activeSection.set(SectionEnums.ABOUT);
          }
        }, 100);
      });
    });
  }
}
