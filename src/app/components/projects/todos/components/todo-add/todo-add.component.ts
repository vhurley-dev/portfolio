import { Component, Input, WritableSignal,} from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  constructor(private http: HttpClient, private todosService: TodosService) {}
  taskTitle: string;
  @Input() tasksList: WritableSignal<Task[]>;

  newTask() {
    const newTask: Task = {
      id: '',
      completed: false,
      title: this.taskTitle,
      editMode: false
    }
    this.todosService.addTask(newTask);
    this.taskTitle = '';
    // location.reload();
  }
}
