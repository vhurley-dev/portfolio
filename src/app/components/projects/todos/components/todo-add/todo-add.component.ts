import { Component, EventEmitter, Input, Output, WritableSignal,} from '@angular/core';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
@Input() tasksList: WritableSignal<Task[]>;

  addTask(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      const newTask = {
        title: titleInput.value,
        completed: false
      };
      this.tasksList.set([...this.tasksList(), newTask]);
    }
    titleInput.value = '';
  }
}
