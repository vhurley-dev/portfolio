import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { DeveloperNote } from '../../interfaces/component.model';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-lab-section',
  imports: [IconModule],
  templateUrl: './lab-section.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './lab-section.component.scss',
})
export class LabSectionComponent {
  index = input.required<number>();
  title = input.required<string>();
  challenge = input.required<string>();
  solution = input.required<string>();
  developerNotes = input<DeveloperNote[]>([]);
  articles = input<{ title: string; url: string }[]>([]);
  isLast = input<boolean>(false);
}
