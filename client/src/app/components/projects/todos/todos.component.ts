import { Component, effect, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { TodosService } from './todos.service';
import { ServerStatusService } from '../../global/server-status/server-status.service';
import { ServerStatusComponent } from '../../global/server-status/server-status.component';

@Component({
  selector: 'app-todos',
  imports: [
    TodoAddComponent,
    TodoListComponent,
    IconModule,
    ServerStatusComponent,
  ],
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
    // Add a log here to see if the component is even starting the watch
    console.log('TodoComponent initialized, watching server signal...');

    effect(() => {
      const ready = this.isServerReady();
      console.log('Signal changed! Current value:', ready);

      if (ready) {
        console.log('Server is READY. Fetching todos...');
        this.todosService.getTasks();
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
