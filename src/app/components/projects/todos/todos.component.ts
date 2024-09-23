import { Component, signal } from '@angular/core';
import { Location } from '@angular/common';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { Task } from './interfaces/task.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoAddComponent, TodoListComponent, IconModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  constructor(private _location: Location) {}
  showMenu: boolean = false;
  tasks = signal<Task[]>([
    { title: 'Walk my beautiful dog', completed: true },
    { title: 'Book an adventure holiday', completed: false },
    { title: 'Call mum and see if shes up for an adventure holiday', completed: true }, 
    { title: 'Ride a camel in the desert', completed: false }
  ])

  backClick() {
    this._location.back();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
