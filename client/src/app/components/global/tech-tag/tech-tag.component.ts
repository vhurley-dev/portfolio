import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  imports: [],
  templateUrl: './tech-tag.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './tech-tag.component.scss',
})
export class TechTagComponent {
  techTag = input.required<string>();
}
