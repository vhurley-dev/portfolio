import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { BuildInfo } from '../../interfaces/profile.model';
import { IconModule } from '../../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-build-info',
  imports: [IconModule],
  templateUrl: './build-info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './build-info.component.scss',
})
export class BuildInfoComponent {
  buildInfo = input.required<BuildInfo>();
}
