import { Component, signal } from '@angular/core';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { Task } from './interfaces/task.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoAddComponent, TodoListComponent, IconModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  tasks = signal<Task[]>([
    { title: 'Style the task list', completed: true },
    { title: 'Create add task functionality', completed: false },
    { title: 'Create delete task button', completed: true }, 
    { title: 'Add filters', completed: false }
  ])
}
