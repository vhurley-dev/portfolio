import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.model';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-edit',
  imports: [FormsModule, IconModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss',
})
export class TodoEditComponent {
  constructor(private todosService: TodosService) {}
  task = input.required<Task>();
  taskUpdated = output<Task>();
  toggleEdit = output<boolean>();
  cancel = output<void>();
  updatedTask: Task;

  ngOnInit() {
    this.updatedTask = { ...this.task() };
  }

  onEditTask(updatedTaskTitle: string) {
    const finalTask = {
      ...this.updatedTask,
      title: updatedTaskTitle,
      editMode: false,
    };
    this.todosService.updateTask(finalTask);
    this.taskUpdated.emit(finalTask);
  }

  cancelEditTask() {
    this.cancel.emit();
  }
}
