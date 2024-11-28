import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.model';
import { IconModule } from '../../../../../../../projects/icon/src/public-api';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [FormsModule, IconModule],
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent {
  constructor(private todosService: TodosService) {}
  @Input() task: Task;
  updatedTask: Task;
  
  ngOnInit() {
    this.updatedTask = this.task;
  }
  onEditTask(updatedTaskTitle: string) {
    this.updatedTask.title = updatedTaskTitle;
    this.updatedTask.editMode = false;
    this.todosService.updateTask(this.updatedTask);
  }

  cancelEditTask(task: Task) {
    task.editMode = false;
  }
}
