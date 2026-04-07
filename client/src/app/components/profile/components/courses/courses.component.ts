import { Component, computed, input, signal } from '@angular/core';
import { Course } from '../../interfaces/profile.model';
import { IconModule } from '../../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-courses',
  imports: [IconModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses = input.required<Course[]>();
  showAll = signal(false);
  visibleCourses = computed(() => {
    const list = this.courses();
    return this.showAll() ? list : list.slice(0, 6);
  });

  toggleShowAll() {
    this.showAll.set(!this.showAll());
  }
}
