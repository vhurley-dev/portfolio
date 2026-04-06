import { Component, effect, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { TodosService } from './todos.service';
import { ServerStatusService } from '../../global/server-status/server-status.service';

@Component({
  selector: 'app-todos',
  imports: [TodoAddComponent, TodoListComponent, IconModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  private serverStatusService = inject(ServerStatusService);
  isServerReady = this.serverStatusService.isReady;
  constructor(
    private _location: Location,
    private todosService: TodosService,
  ) {
    effect(() => {
      if (this.isServerReady()) {
        this.todosService.getTasks(); // Call your existing data fetcher
      }
    });
  }

  tasks = this.todosService.getUpdatedTasksListener();

  ngOnInit() {
    // this.todosService.getTasks();
  }

  backClick() {
    this._location.back();
  }
}
