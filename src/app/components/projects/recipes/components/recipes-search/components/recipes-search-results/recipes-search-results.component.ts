import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../../../../../../projects/icon/src/public-api';
import { RecipesService } from '../../../../services/recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-search-results',
  standalone: true,
  imports: [CommonModule, IconModule, RouterLink],
  templateUrl: './recipes-search-results.component.html',
  styleUrl: './recipes-search-results.component.scss'
})
export class RecipesSearchResultsComponent {
  @Input() recipes: any;
  @Input() filterOpen: boolean;
  @Output() nextResults = new EventEmitter<any>;
  recipeService = inject(RecipesService);

  loadNext(nextUrl: string) {
    this.recipeService.fetchNextRecipes(nextUrl).subscribe((res) => {
        this.recipes = {...res};
        this.nextResults.emit(this.recipes);
      });
  }
}
