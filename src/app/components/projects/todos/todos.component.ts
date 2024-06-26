import { Component } from '@angular/core';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoAddComponent, TodoListComponent, IconModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

}
