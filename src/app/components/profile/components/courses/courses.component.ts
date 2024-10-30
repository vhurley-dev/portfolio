import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/profile.model';
import { IconModule } from '../../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [IconModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  @Input() courses: Course[]
}
