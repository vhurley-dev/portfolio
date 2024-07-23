import { Component } from '@angular/core';
import { RecipesHeaderComponent } from './components/recipes-header/recipes-header.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesHeaderComponent, RouterOutlet, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {

}
