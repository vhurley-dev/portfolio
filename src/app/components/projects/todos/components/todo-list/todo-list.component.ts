import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal, computed, signal } from '@angular/core';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';
import { Task, TasksFilter } from '../../interfaces/task.model';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() tasks: WritableSignal<Task[]>;
  filter = signal(TasksFilter.All);
  filters = TasksFilter;
  filteredTasks = computed(() => {
    switch(this.filter()) {
      case TasksFilter.All: return this.tasks();
      case TasksFilter.Outstanding: return this.tasks().filter(taskItem => {
        return !taskItem.completed;
      });
      case TasksFilter.Completed: return this.tasks().filter(taskItem => {
        return taskItem.completed;
      })
    }
  });
  changeFilter(filter: TasksFilter) {
    this.filter.set(filter);
  }
  completedTasksCount = computed(() => {
    return this.tasks().filter(task =>
      task.completed).length;
  })

  toggleTask(task: Task) {
    const updatedTasks = this.tasks().map(taskItem => 
      taskItem.title === task.title ? {...taskItem,
        completed: !taskItem.completed} : taskItem
      );
      this.tasks.set(updatedTasks);
  }
  deleteTask(taskTitle: string, index: number) {
    const updatedTasks = this.tasks().map(taskItem => 
      taskItem.title === taskTitle ? {...taskItem,
        completed: false} : taskItem
    );
    this.tasks.set(updatedTasks);
    this.tasks().splice(index, 1);
  }
  // icon is in place in html to trigger edit function
  // To do: Edit functionality
  // editTask(taskTitle: String, index: number) {
  //   alert(`Editing task ${index}: ${taskTitle} isn't available just yet.`)
  // }
}
