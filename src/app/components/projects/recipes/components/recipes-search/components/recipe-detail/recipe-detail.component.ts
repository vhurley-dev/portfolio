import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../../../services/recipes.service';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../../../../../../projects/icon/src/public-api';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, IconModule, NutritionComponent, IngredientsComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipesService = inject(RecipesService);
  recipeUrl: string;
  recipeImgUrl: string;
  recipe: any;
  nutrition: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.recipeUrl = params['recipeUrl'];
      this.recipeImgUrl = params['recipeImgUrl'];
    });
  }
  ngOnInit(): void {
    this.recipesService.getRecipe(this.recipeUrl).subscribe((res) => {
      this.recipe = {...res};
      this.nutrition = {macros: this.recipe.recipe.totalNutrients, yield: this.recipe.recipe.yield}
    })
  }
}
