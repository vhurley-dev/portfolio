import { Component, computed, effect, inject, input } from '@angular/core';
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
  isLoading = input<boolean>(true);
  isServerReady = this.serverStatusService.isReady;
  isServerError = this.serverStatusService.isError;
  isDataLoading = this.todosService.isLoadingData;
  showSkeleton = computed(
    () =>
      (!this.isServerReady() || this.isDataLoading()) && !this.isServerError(),
  );
  isDisabled = computed(() => !this.isServerReady() || this.isServerError());

  constructor(
    private _location: Location,
    private todosService: TodosService,
  ) {
    effect(() => {
      const ready = this.isServerReady();

      if (ready) {
        this.todosService.getTasks();
      }
    });
  }

  tasks = this.todosService.getUpdatedTasksListener();

  backClick() {
    this._location.back();
  }
}
