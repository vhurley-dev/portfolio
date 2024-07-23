import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RecipesService } from '../../../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../../../../../../projects/icon/src/lib/icon/icon.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes-search-bar',
  standalone: true,
  imports: [CommonModule, IconModule, ReactiveFormsModule ],
  templateUrl: './recipes-search-bar.component.html',
  styleUrl: './recipes-search-bar.component.scss'
})
export class RecipesSearchBarComponent {
  @Input() data: any;
  @Output() searchResults = new EventEmitter<any>;
  @Output() filterOpen = new EventEmitter<any>;
  recipeService = inject(RecipesService);
  searchTerm: string = '';
  filtersOpen: boolean = false;
  dietOptions: string[] = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'];
  filtersForm = new FormGroup({
    ingredientsMin: new FormControl(''),
    ingredientsMax: new FormControl(''),
    dietTypes: new FormControl(''),
  })
  
  searchRecipes(searchTerm: any) {
    if(searchTerm.target) {
      this.searchTerm = searchTerm.target.value;
    } else {
      this.searchTerm = searchTerm
    }
    this.recipeService.getRecipes(this.searchTerm, this.filtersForm.controls).subscribe((res) => {
      this.data = {...res};
      this.searchResults.emit(this.data);
    });
  }

  toggleFilters() {
    this.filtersOpen = !this.filtersOpen;
    this.filterOpen.emit(this.filtersOpen);
  }

  applyFilters() {
    this.searchRecipes("omlette");
    this.toggleFilters();
  }
}
