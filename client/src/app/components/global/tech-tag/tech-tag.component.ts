import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  imports: [],
  templateUrl: './tech-tag.component.html',
  styleUrl: './tech-tag.component.scss',
})
export class TechTagComponent {
  techTag = input.required<string>();
}
