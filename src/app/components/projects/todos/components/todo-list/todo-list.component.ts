import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tasks = [
    { title: 'Style the task list', completed: true },
    { title: 'Create add task functionality', completed: false },
    { title: 'Create delete task button', completed: false }, 
    { title: 'Add filters', completed: false }
  ]
}
