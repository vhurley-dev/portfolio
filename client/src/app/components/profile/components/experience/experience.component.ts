import { Component, input } from '@angular/core';
import { TechTagComponent } from '../../../global/tech-tag/tech-tag.component';
import { Experience } from '../../interfaces/profile.model';
import { IconModule } from '../../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-experience',
  imports: [TechTagComponent, IconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = input.required<Experience[]>();
}
