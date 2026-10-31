import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Social } from '../../interfaces/profile.model';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './socials.component.scss',
})
export class SocialsComponent {
  socials = input.required<Social[]>();
}
