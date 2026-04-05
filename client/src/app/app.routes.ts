import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TodosComponent } from './components/projects/todos/todos.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: ProfileComponent },
    { path: 'todos', component: TodosComponent },
    { path: 'recipes', loadChildren: () => import('./components/projects/recipes/recipes.routes').then(feature => feature.recipeRoutes)},
    { path: '**', redirectTo: ''} 
]
