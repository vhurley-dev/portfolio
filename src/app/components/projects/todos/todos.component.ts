import { Component, WritableSignal } from '@angular/core';
import { Location } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { Task } from './interfaces/task.model';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoAddComponent, TodoListComponent, IconModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  constructor(private _location: Location, private todosService: TodosService) {}

  tasks = this.todosService.getUpdatedTasksListener();

  ngOnInit() {
    this.todosService.getTasks();
  }

  backClick() {
    this._location.back();
  }
}
