import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  imports: [],
  templateUrl: './tech-tag.component.html',
  styleUrl: './tech-tag.component.scss'
})
export class TechTagComponent {
  @Input() techTag = '';
}
