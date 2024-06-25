import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TodosComponent } from './components/projects/todos/todos.component';

export const routes: Routes = [
    {path: '', component: ProfileComponent},
    {path: 'todos', component: TodosComponent}
];
