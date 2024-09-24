import { ChangeDetectorRef, Component } from '@angular/core';
import { RecipesSearchBarComponent } from './components/recipes-search-bar/recipes-search-bar.component';
import { RecipesSearchResultsComponent } from './components/recipes-search-results/recipes-search-results.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-search',
  standalone: true,
  imports: [CommonModule, RecipesSearchBarComponent, RecipesSearchResultsComponent],
  templateUrl: './recipes-search.component.html',
  styleUrl: './recipes-search.component.scss'
})
export class RecipesSearchComponent {
  recipeData: any;
  filterOpen: boolean;

  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  updateSearchResults(recipes: any) {
    this.recipeData = recipes;
  }

  updateDisplay(filterStatus: boolean) {
    this.filterOpen = filterStatus;
  }
}
