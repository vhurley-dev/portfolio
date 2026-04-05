import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconModule } from '../../../../../../projects/icon/src/public-api';
import { TechTagComponent } from '../../../global/tech-tag/tech-tag.component';
import { RouterLink } from '@angular/router';
import { Project } from '../../interfaces/profile.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, IconModule, TechTagComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  imgagesUrl: string = './assets/img/';
  @Input() projects: Project[];
}
