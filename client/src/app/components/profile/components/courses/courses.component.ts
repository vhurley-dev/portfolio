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

  courseIcon(provider: string) {
    switch (provider.toLowerCase()) {
      case 'udemy':
        return 'udemy';
      case 'linkedin learning':
        return 'linkedin';
      case 'anthropic':
        return 'anthropic';
      case 'aws training and certification':
        return 'aws';
      case 'nng':
        return 'nng';
      default:
        return 'default';
    }
  }

  toggleShowAll() {
    this.showAll.set(!this.showAll());
  }
}
