import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { IconModule } from '../../../../../../projects/icon/src/public-api';
import { RouterLink } from '@angular/router';
import { TechTagComponent } from '../../../global/tech-tag/tech-tag.component';
import { Project } from '../../interfaces/profile.model';

@Component({
  selector: 'app-projects',
  imports: [IconModule, TechTagComponent, RouterLink],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  imgagesUrl: string = './assets/img/';
  projects = input.required<Project[]>();
}
