import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Technology } from '../../interfaces/profile.model';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  @Input() technologies: Technology[];

}
