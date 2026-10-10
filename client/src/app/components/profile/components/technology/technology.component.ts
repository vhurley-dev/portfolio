import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TechnologyGroup } from '../../interfaces/profile.model';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  technologies = input.required<TechnologyGroup[]>();
}
