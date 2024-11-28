import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal, computed, signal } from '@angular/core';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';
import { Task, TasksFilter } from '../../interfaces/task.model';
import { TodosService } from '../../todos.service';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, IconModule, TodoEditComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(private todosService: TodosService) {}
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

  onCompleteTask(taskId: string) {
    let updatedTasks = this.tasks().map(taskItem => 
      taskItem.id === taskId ? {...taskItem,
        completed: !taskItem.completed} : taskItem
      );
    this.tasks.set(updatedTasks);
    let updatedTask = this.tasks().find(task => task.id === taskId);
    if(updatedTask) {
      this.todosService.updateTask(updatedTask);
    }
  }

  onDeleteTask(taskId: string) {
    let updatedTasks = this.tasks().filter(task => task.id !== taskId);
    this.tasks.set(updatedTasks);
    this.todosService.deleteTask(taskId).subscribe();
  }

  onEditTask(task: Task) {
    task.editMode = true;
  }
}
