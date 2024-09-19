import { Routes } from '@angular/router';
import { RecipeCalculatorComponent } from './components/recipe-calculator/recipe-calculator.component';
import { RecipesSearchComponent } from './components/recipes-search/recipes-search.component';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './components/recipes-search/components/recipe-detail/recipe-detail.component';

export const recipeRoutes: Routes = [
    { path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipesSearchComponent },
            { path: ':recipeUrl/:recipeImgUrl', component: RecipeDetailComponent },
            { path: 'calculator', component: RecipeCalculatorComponent }
        ]
    }
];