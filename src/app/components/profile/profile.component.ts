import { Component, inject } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { Profile } from './interfaces/profile.model';
import { SectionEnums } from './enums.ts/sections.enum';
import { BuildInfoComponent } from './components/build-info/build-info.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,
            NavigationComponent,
            ExperienceComponent, 
            TechnologyComponent,
            ProjectsComponent,
            BuildInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  profileService = inject(ProfileService);
  profile: Profile;
  section: typeof SectionEnums = SectionEnums;

 constructor() {
  this.profileService.getProfile().subscribe((res: Profile) => {
    this.profile = {...res};
  });
 }

}

