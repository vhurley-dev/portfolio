import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavigationComponent, ExperienceComponent, TechnologyComponent, ProjectsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
