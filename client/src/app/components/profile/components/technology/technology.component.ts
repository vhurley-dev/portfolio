import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Technology } from '../../interfaces/profile.model';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  technologies = input.required<Technology[]>();
}
