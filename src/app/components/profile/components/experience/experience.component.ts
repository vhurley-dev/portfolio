import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TechTagComponent } from '../../../global/tech-tag/tech-tag.component';
import { Experience } from '../../interfaces/profile.model';
import { IconModule } from '../../../../../../projects/icon/src/public-api';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TechTagComponent, IconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
@Input() experiences: Experience[];

}
