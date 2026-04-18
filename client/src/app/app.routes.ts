import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TodosComponent } from './components/projects/todos/todos.component';
import { ComponentLabComponent } from './components/projects/component-lab/component-lab.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileComponent,
    title: 'Portfolio App',
  },
  {
    path: 'component-lab',
    component: ComponentLabComponent,
    title: 'Portfolio App | Component Lab',
    data: {
      description:
        'An interactive lab exploring high-performance, accessible, and headless design patterns in Angular 21. Featuring WCAG-compliant components.',
    },
  },
  {
    path: 'todos',
    component: TodosComponent,
    title: 'Portfolio App | Todos',
    data: {
      description:
        'A task management interface featuring real-time state synchronisation and server health monitoring.',
    },
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./components/projects/recipes/recipes.routes').then(
        (feature) => feature.recipeRoutes,
      ),
  },
  { path: '**', redirectTo: '' },
];
