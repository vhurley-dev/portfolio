import { Component, input, model, signal } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {
  constructor(private todosService: TodosService) {}
  isDisabled = input<boolean>(true);
  taskTitle = signal<string>('');
  tasksList = model.required<Task[]>();

  newTask() {
    if (this.taskTitle && !this.isDisabled()) {
      const newTask: Task = {
        id: '',
        completed: false,
        title: this.taskTitle(),
        editMode: false,
      };
      this.todosService.addTask(newTask);
      this.taskTitle.set('');
    }
  }
}
