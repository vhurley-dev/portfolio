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

  recipesM: any = {
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {
        "next": {
            "href": "https://api.edamam.com/api/recipes/v2?q=Chicken&app_key=567236b23820e6ee287d06d72d3fb10f&_cont=CHcVQBtNNQphDmgVQntAEX4BYkt6DQAFRm1GAmMUYVd6AwoVX3cTBDRHalEmAwQDQmFCUGcTMQFyUANTEW0WAWARa1QlABFqX3cWQT1OcV9xBE4%3D&type=public&app_id=35faafbb",
            "title": "Next page"
        }
    },
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8d3e4b9299664a1ca8e6f5bdb8532300",
                "label": "Rotisserie Chicken Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aa5e8b00fbb73d80784c3d415255976fdc7a67741892835313f41628212a6d6b",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2fc60f1ea581d8c12be0181b98715aadd906a003594ddd6b753c81ba69e1a1f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f679b524c703487c0f8da743dd8f45c720d23473d9b6387ac71ba229aedf2595",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aa5e8b00fbb73d80784c3d415255976fdc7a67741892835313f41628212a6d6b",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/basic-rotisserie-chicken-recipe",
                "shareAs": "http://www.edamam.com/recipe/rotisserie-chicken-recipe-8d3e4b9299664a1ca8e6f5bdb8532300/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 whole chicken, about 4 pounds",
                    "2 tablespoons kosher salt",
                    "2 tablespoons butter, melted"
                ],
                "ingredients": [
                    {
                        "text": "1 whole chicken, about 4 pounds",
                        "quantity": 4,
                        "measure": "pound",
                        "food": "chicken",
                        "weight": 1814.36948,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "2 tablespoons kosher salt",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "kosher salt",
                        "weight": 29.124999999507587,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2 tablespoons butter, melted",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 2856.23617976,
                "totalCO2Emissions": 18635.874942599155,
                "co2EmissionsClass": "G",
                "totalWeight": 1851.5802008708001,
                "totalTime": 540,
                "cuisineType": [
                    "mexican"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "starter"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2856.23617976,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 209.33185820639997,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 67.51754071983999,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.196758109008,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 83.63292577536,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 40.70565125872,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.017039999999999996,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.017039999999999996,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.017039999999999996,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 229.7228518304,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 986.3884347999999,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4285.3235703504,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 144.645410112992,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 247.410356488708,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2339.3485133656636,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.13869659647364,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 16.1967740487108,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1820.4597322079999,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 700.1022110239999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 19.7403399424,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7416827478399999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.49018149568,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 83.90837275519999,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.3190513624,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 74.878274784,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 74.878274784,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.87297086384,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.4675424928,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.3601937392,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 20.494568695999998,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 818.9074440657416,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 142.811808988,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 322.0490126252307,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 337.5877035991999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.005679999999999998,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 459.4457036608,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 328.7961449333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 178.5551487646,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 14.464541011299202,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 58.90722773540667,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 49.773372624801354,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 61.88164775818689,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 147.24340044282545,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 260.06567602971427,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 77.7891345582222,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.93371104711111,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 61.80689565333333,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 114.62934582153845,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 524.42732972,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 332.23472018461536,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 18.719568696,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 161.37378599333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.45028328533333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 29.06795826133333,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 17.078807246666663,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 209.33185820639997,
                        "hasRDI": true,
                        "daily": 322.0490126252307,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 67.51754071983999,
                                "hasRDI": true,
                                "daily": 337.5877035991999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.196758109008,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 83.63292577536,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 40.70565125872,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.017039999999999996,
                        "hasRDI": true,
                        "daily": 0.005679999999999998,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.017039999999999996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0,
                                "hasRDI": true,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.017039999999999996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 229.7228518304,
                        "hasRDI": true,
                        "daily": 459.4457036608,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 986.3884347999999,
                        "hasRDI": true,
                        "daily": 328.7961449333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4285.3235703504,
                        "hasRDI": true,
                        "daily": 178.5551487646,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 144.645410112992,
                        "hasRDI": true,
                        "daily": 14.464541011299202,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 247.410356488708,
                        "hasRDI": true,
                        "daily": 58.90722773540667,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2339.3485133656636,
                        "hasRDI": true,
                        "daily": 49.773372624801354,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.13869659647364,
                        "hasRDI": true,
                        "daily": 61.88164775818689,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 16.1967740487108,
                        "hasRDI": true,
                        "daily": 147.24340044282545,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1820.4597322079999,
                        "hasRDI": true,
                        "daily": 260.06567602971427,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 700.1022110239999,
                        "hasRDI": true,
                        "daily": 77.7891345582222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 19.7403399424,
                        "hasRDI": true,
                        "daily": 21.93371104711111,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7416827478399999,
                        "hasRDI": true,
                        "daily": 61.80689565333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.49018149568,
                        "hasRDI": true,
                        "daily": 114.62934582153845,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 83.90837275519999,
                        "hasRDI": true,
                        "daily": 524.42732972,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.3190513624,
                        "hasRDI": true,
                        "daily": 332.23472018461536,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 74.878274784,
                        "hasRDI": true,
                        "daily": 18.719568696,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 74.878274784,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.87297086384,
                        "hasRDI": true,
                        "daily": 161.37378599333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.4675424928,
                        "hasRDI": true,
                        "daily": 16.45028328533333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.3601937392,
                        "hasRDI": true,
                        "daily": 29.06795826133333,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 20.494568695999998,
                        "hasRDI": true,
                        "daily": 17.078807246666663,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 818.9074440657416,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/8d3e4b9299664a1ca8e6f5bdb8532300?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fe97032f05b141428abc015e462739d9",
                "label": "Jamaican jerk chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=97faf8f6044aea80a94e555d453bc9102e7fbe20d566306dc5c2c38c11005371",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=efcc78dcfde1246cbe7664f3c461800ca5bcd4303b5c6b115daf69c8f86c81c8",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13d11cb2cb794198ea92a84a0b27632eca09a3328cf79cf865a38e248656fdf7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=97faf8f6044aea80a94e555d453bc9102e7fbe20d566306dc5c2c38c11005371",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3059ca5b22804620b1fb3392a4a46e05fa4c3e9f5f3ebac01e614bada53ad5a5",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "BBC Good Food",
                "url": "https://www.bbcgoodfood.com/recipes/jamaican-jerk-chicken",
                "shareAs": "http://www.edamam.com/recipe/jamaican-jerk-chicken-fe97032f05b141428abc015e462739d9/chicken",
                "yield": 2,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Sugar",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "2 chicken thighs",
                    "2 chicken legs"
                ],
                "ingredients": [
                    {
                        "text": "2 chicken thighs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "chicken thighs",
                        "weight": 386,
                        "foodCategory": "Poultry",
                        "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                        "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                    },
                    {
                        "text": "2 chicken legs",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "chicken legs",
                        "weight": 688,
                        "foodCategory": "Poultry",
                        "foodId": "food_ane1uw5amh8okda3qqu88bow58ul",
                        "image": "https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg"
                    }
                ],
                "calories": 2325.38,
                "totalCO2Emissions": 10600.38,
                "co2EmissionsClass": "G",
                "totalWeight": 1074,
                "totalTime": 55,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2325.38,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 174.156,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 47.5128,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.7409,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 72.334,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 36.4422,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 2.1346,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 2.1346,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 176.522,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1018.12,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 890.5799999999999,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 88.94,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 200.2,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2184.08,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 7.372,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.093,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1672.42,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 281.41999999999996,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.3760000000000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7840199999999999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.52978,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 50.375600000000006,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.52726,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 39.1,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 39.1,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 6.246,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.074,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.3242000000000003,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 23.93,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 719.7139999999999,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 116.269,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 267.93230769230775,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 237.564,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.7115333333333332,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 353.04400000000004,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 339.37333333333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 37.1075,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 8.894,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 47.666666666666664,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 46.469787234042556,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 40.955555555555556,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 137.20909090909092,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 238.91714285714286,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 31.268888888888885,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.5288888888888892,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 65.335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 117.6753846153846,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 314.8475,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 271.3276923076923,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 9.775,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 260.25,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.16,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 15.494666666666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 19.941666666666666,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 174.156,
                        "hasRDI": true,
                        "daily": 267.93230769230775,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 47.5128,
                                "hasRDI": true,
                                "daily": 237.564,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.7409,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 72.334,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 36.4422,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 2.1346,
                        "hasRDI": true,
                        "daily": 0.7115333333333332,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 2.1346,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0,
                                "hasRDI": true,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 176.522,
                        "hasRDI": true,
                        "daily": 353.04400000000004,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1018.12,
                        "hasRDI": true,
                        "daily": 339.37333333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 890.5799999999999,
                        "hasRDI": true,
                        "daily": 37.1075,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 88.94,
                        "hasRDI": true,
                        "daily": 8.894,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 200.2,
                        "hasRDI": true,
                        "daily": 47.666666666666664,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2184.08,
                        "hasRDI": true,
                        "daily": 46.469787234042556,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 7.372,
                        "hasRDI": true,
                        "daily": 40.955555555555556,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.093,
                        "hasRDI": true,
                        "daily": 137.20909090909092,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1672.42,
                        "hasRDI": true,
                        "daily": 238.91714285714286,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 281.41999999999996,
                        "hasRDI": true,
                        "daily": 31.268888888888885,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.3760000000000001,
                        "hasRDI": true,
                        "daily": 1.5288888888888892,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7840199999999999,
                        "hasRDI": true,
                        "daily": 65.335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.52978,
                        "hasRDI": true,
                        "daily": 117.6753846153846,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 50.375600000000006,
                        "hasRDI": true,
                        "daily": 314.8475,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.52726,
                        "hasRDI": true,
                        "daily": 271.3276923076923,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 39.1,
                        "hasRDI": true,
                        "daily": 9.775,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 39.1,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 6.246,
                        "hasRDI": true,
                        "daily": 260.25,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.074,
                        "hasRDI": true,
                        "daily": 7.16,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.3242000000000003,
                        "hasRDI": true,
                        "daily": 15.494666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 23.93,
                        "hasRDI": true,
                        "daily": 19.941666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 719.7139999999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/fe97032f05b141428abc015e462739d9?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7bf4a371c6884d809682a72808da7dc2",
                "label": "Teriyaki Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a8f1681b55f260fc2896676fce28e8c7c832c220ac70ad3a28bf5148870c1b9a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9250e8ec0c7958a32d047b13c0519b13b8b64f715a577972536be9e56cf54e33",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c447a5e9aa50770e12ef438f43a4e42fc0b39de109c93bc929576aad61788c0",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a8f1681b55f260fc2896676fce28e8c7c832c220ac70ad3a28bf5148870c1b9a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1bb3ad8d624c3a82c71e5e881ec997627181b687bbda2f8267ec87ebeabef055",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "David Lebovitz",
                "url": "http://www.davidlebovitz.com/2012/12/chicken-teriyaki-recipe-japanese-farm-food/",
                "shareAs": "http://www.edamam.com/recipe/teriyaki-chicken-7bf4a371c6884d809682a72808da7dc2/chicken",
                "yield": 6,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1/2 cup (125ml) mirin",
                    "1/2 cup (125ml) soy sauce",
                    "One 2-inch (5cm) piece of fresh ginger, peeled and grated",
                    "2-pounds (900g) boneless chicken thighs (4-8 thighs, depending on size)"
                ],
                "ingredients": [
                    {
                        "text": "1/2 cup (125ml) mirin",
                        "quantity": 125,
                        "measure": "milliliter",
                        "food": "mirin",
                        "weight": 122.99850757795392,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1/2 cup (125ml) soy sauce",
                        "quantity": 125,
                        "measure": "milliliter",
                        "food": "soy sauce",
                        "weight": 134.72774670265568,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "One 2-inch (5cm) piece of fresh ginger, peeled and grated",
                        "quantity": 1,
                        "measure": "piece",
                        "food": "fresh ginger",
                        "weight": 15,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "2-pounds (900g) boneless chicken thighs (4-8 thighs, depending on size)",
                        "quantity": 2,
                        "measure": "pound",
                        "food": "chicken thighs",
                        "weight": 907.18474,
                        "foodCategory": "Poultry",
                        "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                        "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                    }
                ],
                "calories": 2253.101981306866,
                "totalCO2Emissions": 9609.994304344733,
                "co2EmissionsClass": "F",
                "totalWeight": 1179.9109942806097,
                "totalTime": 0,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2253.101981306866,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 151.47311499620517,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 41.13355150309294,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.7711070290000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 63.100281373098355,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 31.85674445182799,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 17.72996514133862,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 16.352143167717376,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.3778219736212456,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.7939109868106228,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 161.54031321948597,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 889.0410452000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8135.782903527355,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 116.51301359077408,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 276.82169621464243,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2529.722194651041,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 8.335407066766463,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 12.950414243828696,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1660.4080117810859,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 208.65249020000005,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.75,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7104550166118764,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.5428186550593823,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 44.98844541545843,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.3713281129199304,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 47.7274267383718,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 47.7274267383718,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.6245453880000005,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.9071847400000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.944087954,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 19.065879540000005,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 807.4698376934067,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 112.6550990653433,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 233.03556153262335,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 205.6677575154647,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 5.909988380446207,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 5.511287894484982,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 323.08062643897193,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 296.3470150666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 338.9909543136398,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 11.651301359077408,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 65.90992767015297,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 53.823876481937035,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 46.307817037591455,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 117.73103858026087,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 237.20114454015513,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 23.183610022222226,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.8333333333333334,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 59.204584717656374,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 118.67835808149096,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 281.17778384661517,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 259.33293176307154,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 11.93185668459295,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 234.35605783333335,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.047898266666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 12.96058636,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 15.888232950000004,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 151.47311499620517,
                        "hasRDI": true,
                        "daily": 233.03556153262335,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 41.13355150309294,
                                "hasRDI": true,
                                "daily": 205.6677575154647,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.7711070290000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 63.100281373098355,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 31.85674445182799,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 17.72996514133862,
                        "hasRDI": true,
                        "daily": 5.909988380446207,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 16.352143167717376,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.3778219736212456,
                                "hasRDI": true,
                                "daily": 5.511287894484982,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.7939109868106228,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 161.54031321948597,
                        "hasRDI": true,
                        "daily": 323.08062643897193,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 889.0410452000001,
                        "hasRDI": true,
                        "daily": 296.3470150666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 8135.782903527355,
                        "hasRDI": true,
                        "daily": 338.9909543136398,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 116.51301359077408,
                        "hasRDI": true,
                        "daily": 11.651301359077408,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 276.82169621464243,
                        "hasRDI": true,
                        "daily": 65.90992767015297,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2529.722194651041,
                        "hasRDI": true,
                        "daily": 53.823876481937035,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 8.335407066766463,
                        "hasRDI": true,
                        "daily": 46.307817037591455,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 12.950414243828696,
                        "hasRDI": true,
                        "daily": 117.73103858026087,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1660.4080117810859,
                        "hasRDI": true,
                        "daily": 237.20114454015513,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 208.65249020000005,
                        "hasRDI": true,
                        "daily": 23.183610022222226,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.75,
                        "hasRDI": true,
                        "daily": 0.8333333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7104550166118764,
                        "hasRDI": true,
                        "daily": 59.204584717656374,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.5428186550593823,
                        "hasRDI": true,
                        "daily": 118.67835808149096,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 44.98844541545843,
                        "hasRDI": true,
                        "daily": 281.17778384661517,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.3713281129199304,
                        "hasRDI": true,
                        "daily": 259.33293176307154,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 47.7274267383718,
                        "hasRDI": true,
                        "daily": 11.93185668459295,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 47.7274267383718,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 5.6245453880000005,
                        "hasRDI": true,
                        "daily": 234.35605783333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.9071847400000002,
                        "hasRDI": true,
                        "daily": 6.047898266666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.944087954,
                        "hasRDI": true,
                        "daily": 12.96058636,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 19.065879540000005,
                        "hasRDI": true,
                        "daily": 15.888232950000004,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 807.4698376934067,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/7bf4a371c6884d809682a72808da7dc2?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
                "label": "Chicken Paprikash",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ca116cf9ee4e3c36c9af8cf8eb074a71307c78c5e595694c1029e1d04d154dd",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8669f028bd4975182a65190f9e50a209ad32e3985982c4cd85a7b9c341eff14f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=044dadbf95ba602454b0385bc472512b464b42350ce61d17ba71a2b7dab15f1c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ca116cf9ee4e3c36c9af8cf8eb074a71307c78c5e595694c1029e1d04d154dd",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53be1169f4668a836bd7028cd55f6dffce97dbc17b4926c25c6ac82953232358",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "No Recipes",
                "url": "http://norecipes.com/recipe/chicken-paprikash/",
                "shareAs": "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                    "1/2 teaspoon salt",
                    "1/4 teaspoon black pepper",
                    "1 tablespoon butter – cultured unsalted (or olive oil)",
                    "240 grams onion sliced thin (1 large onion)",
                    "70 grams Anaheim pepper chopped (1 large pepper)",
                    "25 grams paprika (about 1/4 cup)",
                    "1 cup chicken stock",
                    "1/2 teaspoon salt",
                    "1/2 cup sour cream",
                    "1 tablespoon flour – all-purpose"
                ],
                "ingredients": [
                    {
                        "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                        "quantity": 640,
                        "measure": "gram",
                        "food": "chicken - drumsticks",
                        "weight": 640,
                        "foodCategory": "Poultry",
                        "foodId": "food_agzvc6lbxg03stab195szars32lx",
                        "image": "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg"
                    },
                    {
                        "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                        "quantity": 640,
                        "measure": "gram",
                        "food": "thighs",
                        "weight": 640,
                        "foodCategory": "Poultry",
                        "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                        "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/4 teaspoon black pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.725,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 tablespoon butter – cultured unsalted (or olive oil)",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 13.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "240 grams onion sliced thin (1 large onion)",
                        "quantity": 1,
                        "measure": "onion",
                        "food": "onion",
                        "weight": 78.125,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "70 grams Anaheim pepper chopped (1 large pepper)",
                        "quantity": 1,
                        "measure": "pepper",
                        "food": "Anaheim pepper",
                        "weight": 56.25,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv2gevdbd1orbiarnp1vfaez1r85",
                        "image": "https://www.edamam.com/food-img/73f/73ff2eeb21372fe15b0ec51f9ecf368d.jpeg"
                    },
                    {
                        "text": "25 grams paprika (about 1/4 cup)",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "paprika",
                        "weight": 27.200000000459866,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                        "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                    },
                    {
                        "text": "1 cup chicken stock",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "chicken stock",
                        "weight": 240,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/2 cup sour cream",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 115,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "1 tablespoon flour – all-purpose",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "flour",
                        "weight": 7.8124999998679145,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    }
                ],
                "calories": 3038.9512500008163,
                "totalCO2Emissions": 18229.710273409637,
                "co2EmissionsClass": "G",
                "totalWeight": 1824.6125000003276,
                "totalTime": 0,
                "cuisineType": [
                    "central europe"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3038.9512500008163,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 207.60962250005807,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 59.56929187500963,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.7602000000000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 85.24519837500769,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 39.828234875035186,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 49.83156250014755,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 37.77252499999062,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.059037500156926,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 16.722083750047013,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 236.99366250005127,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1291.05,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3929.77975000031,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 315.69037500103326,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 324.8095000007895,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3995.8393750103432,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 16.315966250095485,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 22.42413750001899,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2343.7222500013017,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1084.3032500113127,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 143.66605000000413,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.291880500001359,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.983908750005604,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 67.92107125004479,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.460102250009783,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 100.56375000019099,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 100.56375000019099,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 7.601500000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.2800000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 13.34417750013374,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 71.18228750036887,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1317.964337500036,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 151.94756250004082,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 319.39941923085854,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 297.84645937504814,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 16.610520833382516,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 48.2361500006277,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 473.9873250001026,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 430.35,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 163.74082291667958,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 31.569037500103324,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 77.33559523828322,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 85.01785904277327,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 90.64425694497491,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 203.8557954547181,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 334.81746428590026,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 120.47813889014584,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 159.62894444444905,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 107.65670833344657,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 229.5314423081234,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 424.5066953127799,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 420.0078653853679,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 25.140937500047748,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 316.72916666666674,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 8.533333333333335,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 88.96118333422494,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 59.31857291697406,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 207.60962250005807,
                        "hasRDI": true,
                        "daily": 319.39941923085854,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 59.56929187500963,
                                "hasRDI": true,
                                "daily": 297.84645937504814,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.7602000000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 85.24519837500769,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 39.828234875035186,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 49.83156250014755,
                        "hasRDI": true,
                        "daily": 16.610520833382516,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 37.77252499999062,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.059037500156926,
                                "hasRDI": true,
                                "daily": 48.2361500006277,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 16.722083750047013,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 236.99366250005127,
                        "hasRDI": true,
                        "daily": 473.9873250001026,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1291.05,
                        "hasRDI": true,
                        "daily": 430.35,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3929.77975000031,
                        "hasRDI": true,
                        "daily": 163.74082291667958,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 315.69037500103326,
                        "hasRDI": true,
                        "daily": 31.569037500103324,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 324.8095000007895,
                        "hasRDI": true,
                        "daily": 77.33559523828322,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3995.8393750103432,
                        "hasRDI": true,
                        "daily": 85.01785904277327,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 16.315966250095485,
                        "hasRDI": true,
                        "daily": 90.64425694497491,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 22.42413750001899,
                        "hasRDI": true,
                        "daily": 203.8557954547181,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2343.7222500013017,
                        "hasRDI": true,
                        "daily": 334.81746428590026,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1084.3032500113127,
                        "hasRDI": true,
                        "daily": 120.47813889014584,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 143.66605000000413,
                        "hasRDI": true,
                        "daily": 159.62894444444905,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.291880500001359,
                        "hasRDI": true,
                        "daily": 107.65670833344657,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.983908750005604,
                        "hasRDI": true,
                        "daily": 229.5314423081234,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 67.92107125004479,
                        "hasRDI": true,
                        "daily": 424.5066953127799,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.460102250009783,
                        "hasRDI": true,
                        "daily": 420.0078653853679,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 100.56375000019099,
                        "hasRDI": true,
                        "daily": 25.140937500047748,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 100.56375000019099,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 7.601500000000001,
                        "hasRDI": true,
                        "daily": 316.72916666666674,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.2800000000000002,
                        "hasRDI": true,
                        "daily": 8.533333333333335,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 13.34417750013374,
                        "hasRDI": true,
                        "daily": 88.96118333422494,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 71.18228750036887,
                        "hasRDI": true,
                        "daily": 59.31857291697406,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1317.964337500036,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/8275bb28647abcedef0baaf2dcf34f8b?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_50c72c3f5038466b80014a6d09a1996d",
                "label": "peasant chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03cba4ef9a200b794f178dca22ba41618ccef86e551a6b410d9508c75c0f3c57",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=edfcc9368ee7584a69fb98bd27dcff367a5f5962527c2adc818dc2e9d77498ca",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4cb43c411969448a4fd1f2e55c391a995c874c40dc555a895365bcb76825b445",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9603e55064c2fd7a621dc3792c765e7aefa7b0dd02dd214a64e7fa525317a22d",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/26667-peasant-chicken",
                "shareAs": "http://www.edamam.com/recipe/peasant-chicken-50c72c3f5038466b80014a6d09a1996d/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 chicken",
                    "2-3 potatoes",
                    "1 onion",
                    "3-4 mushrooms"
                ],
                "ingredients": [
                    {
                        "text": "1 chicken",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "chicken",
                        "weight": 1200,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "2-3 potatoes",
                        "quantity": 2.5,
                        "measure": "<unit>",
                        "food": "potatoes",
                        "weight": 532.5,
                        "foodCategory": "vegetables",
                        "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                        "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                    },
                    {
                        "text": "1 onion",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 125,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "3-4 mushrooms",
                        "quantity": 3.5,
                        "measure": "<unit>",
                        "food": "mushrooms",
                        "weight": 63,
                        "foodCategory": "vegetables",
                        "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                        "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
                    }
                ],
                "calories": 3053.885,
                "totalCO2Emissions": 12184.839999999998,
                "co2EmissionsClass": "G",
                "totalWeight": 1920.5,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3053.885,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 182.01845,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 51.937125,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.1640000000000001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 74.9069,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 39.1057,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 106.91629999999999,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 92.97879999999999,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 13.937500000000002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 10.913900000000002,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 237.43795,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 900,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 880.1,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 226.54,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 380.64500000000004,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4913.965,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.69075,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 17.857599999999998,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2157.955,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 492,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 134.67550000000003,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.259855,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.8974099999999998,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 89.66379999999998,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.00237,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 186.335,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 186.335,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.7451999999999996,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.5260000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.6845499999999993,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 29.15,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1383.327,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 152.69425,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 280.02838461538465,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 259.685625,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 35.63876666666666,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 55.75000000000001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 474.87589999999994,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 300,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 36.670833333333334,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 22.654,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 90.62976190476192,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 104.55244680851064,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 87.17083333333333,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 162.34181818181816,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 308.2792857142857,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 54.666666666666664,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 149.63944444444448,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 104.98791666666668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 145.95461538461538,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 560.3987499999998,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 461.7207692307692,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 46.58375,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 156.05,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.84,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 24.563666666666663,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 24.291666666666668,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 182.01845,
                        "hasRDI": true,
                        "daily": 280.02838461538465,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 51.937125,
                                "hasRDI": true,
                                "daily": 259.685625,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.1640000000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 74.9069,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 39.1057,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 106.91629999999999,
                        "hasRDI": true,
                        "daily": 35.63876666666666,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 92.97879999999999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 13.937500000000002,
                                "hasRDI": true,
                                "daily": 55.75000000000001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 10.913900000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 237.43795,
                        "hasRDI": true,
                        "daily": 474.87589999999994,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 900,
                        "hasRDI": true,
                        "daily": 300,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 880.1,
                        "hasRDI": true,
                        "daily": 36.670833333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 226.54,
                        "hasRDI": true,
                        "daily": 22.654,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 380.64500000000004,
                        "hasRDI": true,
                        "daily": 90.62976190476192,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4913.965,
                        "hasRDI": true,
                        "daily": 104.55244680851064,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.69075,
                        "hasRDI": true,
                        "daily": 87.17083333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 17.857599999999998,
                        "hasRDI": true,
                        "daily": 162.34181818181816,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2157.955,
                        "hasRDI": true,
                        "daily": 308.2792857142857,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 492,
                        "hasRDI": true,
                        "daily": 54.666666666666664,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 134.67550000000003,
                        "hasRDI": true,
                        "daily": 149.63944444444448,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.259855,
                        "hasRDI": true,
                        "daily": 104.98791666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.8974099999999998,
                        "hasRDI": true,
                        "daily": 145.95461538461538,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 89.66379999999998,
                        "hasRDI": true,
                        "daily": 560.3987499999998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.00237,
                        "hasRDI": true,
                        "daily": 461.7207692307692,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 186.335,
                        "hasRDI": true,
                        "daily": 46.58375,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 186.335,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.7451999999999996,
                        "hasRDI": true,
                        "daily": 156.05,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.5260000000000002,
                        "hasRDI": true,
                        "daily": 16.84,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.6845499999999993,
                        "hasRDI": true,
                        "daily": 24.563666666666663,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 29.15,
                        "hasRDI": true,
                        "daily": 24.291666666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1383.327,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/50c72c3f5038466b80014a6d09a1996d?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fe0e159a4374192c5848f6276b9643fa",
                "label": "Chicken Tonnato",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/99e/99e834e92bef3dffb6df1c3bb1fa3cdb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1ac618287a1405a9b31764ecf080ef8116b93a51392c4f851b696d48a2a03fb",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99e/99e834e92bef3dffb6df1c3bb1fa3cdb-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=17643020688403441ede91aa79532f7b9d0114290554bc6f2f0cb090256091d4",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99e/99e834e92bef3dffb6df1c3bb1fa3cdb-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=81b964a4882a23f370efe28330ef78b6e7c2553f1c98e883b7505fe0a6f0c70c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99e/99e834e92bef3dffb6df1c3bb1fa3cdb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1ac618287a1405a9b31764ecf080ef8116b93a51392c4f851b696d48a2a03fb",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/317902/chicken-tonnato",
                "shareAs": "http://www.edamam.com/recipe/chicken-tonnato-fe0e159a4374192c5848f6276b9643fa/chicken",
                "yield": 4,
                "dietLabels": [
                    "High-Protein",
                    "Low-Carb",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Sugar",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 tablespoon olive oil",
                    "Two 12-ounce chicken breasts, boned and halved"
                ],
                "ingredients": [
                    {
                        "text": "1 tablespoon olive oil",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "olive oil",
                        "weight": 13.5,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "Two 12-ounce chicken breasts, boned and halved",
                        "quantity": 24,
                        "measure": "ounce",
                        "food": "chicken breasts",
                        "weight": 680.388555,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    }
                ],
                "calories": 935.806266,
                "totalCO2Emissions": 6795.841631255999,
                "co2EmissionsClass": "F",
                "totalWeight": 693.888555,
                "totalTime": 0,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 935.806266,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 31.326180141000002,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 5.6935875646500005,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.047627198850000003,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 14.542877143950001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 4.3023474732,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 153.087424875,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 496.68364515,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 306.44484975,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 34.15442775,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 190.5087954,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2272.6327737,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.5930376535,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.6266421740000006,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1449.2276221500001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 61.23496995000001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6395652417000001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.20428774235,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 65.31730128,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.517951181050001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 61.23496995000001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 61.23496995000001,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.4288159655000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.754175908000001,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.127,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 502.80714214500006,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 46.7903133,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 48.194123293846154,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 28.467937823250004,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 306.17484975,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 165.56121505000002,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 12.768535406249999,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3.4154427750000003,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 45.35923699999999,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 48.35388880212766,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 14.405764741666665,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 42.060383400000006,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 207.03251745000003,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.80388555,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 53.29710347500001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 92.6375186423077,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 408.23313299999995,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 424.4577831576923,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 15.308742487500002,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 59.53399856250001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 38.361172720000006,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.7725,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 31.326180141000002,
                        "hasRDI": true,
                        "daily": 48.194123293846154,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 5.6935875646500005,
                                "hasRDI": true,
                                "daily": 28.467937823250004,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.047627198850000003,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 14.542877143950001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 4.3023474732,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0,
                                "hasRDI": true,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 153.087424875,
                        "hasRDI": true,
                        "daily": 306.17484975,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 496.68364515,
                        "hasRDI": true,
                        "daily": 165.56121505000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 306.44484975,
                        "hasRDI": true,
                        "daily": 12.768535406249999,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 34.15442775,
                        "hasRDI": true,
                        "daily": 3.4154427750000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 190.5087954,
                        "hasRDI": true,
                        "daily": 45.35923699999999,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2272.6327737,
                        "hasRDI": true,
                        "daily": 48.35388880212766,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.5930376535,
                        "hasRDI": true,
                        "daily": 14.405764741666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.6266421740000006,
                        "hasRDI": true,
                        "daily": 42.060383400000006,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1449.2276221500001,
                        "hasRDI": true,
                        "daily": 207.03251745000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 61.23496995000001,
                        "hasRDI": true,
                        "daily": 6.80388555,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6395652417000001,
                        "hasRDI": true,
                        "daily": 53.29710347500001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.20428774235,
                        "hasRDI": true,
                        "daily": 92.6375186423077,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 65.31730128,
                        "hasRDI": true,
                        "daily": 408.23313299999995,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.517951181050001,
                        "hasRDI": true,
                        "daily": 424.4577831576923,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 61.23496995000001,
                        "hasRDI": true,
                        "daily": 15.308742487500002,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 61.23496995000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.4288159655000001,
                        "hasRDI": true,
                        "daily": 59.53399856250001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.754175908000001,
                        "hasRDI": true,
                        "daily": 38.361172720000006,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 8.127,
                        "hasRDI": true,
                        "daily": 6.7725,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 502.80714214500006,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/fe0e159a4374192c5848f6276b9643fa?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2fd7b723ad76418ba917eada104b8b7a",
                "label": "Brick Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/259/259d3ad79284faceabeb7c8e675d53eb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed6b2daf86edc8a1261d09e8ffb8e9d2b13deabf28c3484b2f0657a4aac99881",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/259/259d3ad79284faceabeb7c8e675d53eb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0881a643569e05cc6ec92feaca0af074032da6e7a520653217c14ffc3e1f5355",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/259/259d3ad79284faceabeb7c8e675d53eb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=02b196715fc2637a597ba8137f49a8840953dadddaee72b22f01186fc37788bf",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/259/259d3ad79284faceabeb7c8e675d53eb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed6b2daf86edc8a1261d09e8ffb8e9d2b13deabf28c3484b2f0657a4aac99881",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Saveur",
                "url": "https://www.saveur.com/article/Recipes/Brick-Chicken/",
                "shareAs": "http://www.edamam.com/recipe/brick-chicken-2fd7b723ad76418ba917eada104b8b7a/chicken",
                "yield": 2,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 (4-lb.) chicken, halved, backbone, ribcage, and thighbones removed",
                    "Kosher salt and freshly ground black pepper, to taste",
                    "2 tbsp. canola oil",
                    "1⁄3 cup chicken broth",
                    "1 tbsp. lemon juice"
                ],
                "ingredients": [
                    {
                        "text": "1 (4-lb.) chicken, halved, backbone, ribcage, and thighbones removed",
                        "quantity": 4,
                        "measure": "pound",
                        "food": "chicken",
                        "weight": 1814.36948,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper, to taste",
                        "quantity": 0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 11.625716879998453,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper, to taste",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 5.812858439999227,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "2 tbsp. canola oil",
                        "quantity": 2,
                        "measure": "tablespoon",
                        "food": "canola oil",
                        "weight": 28,
                        "foodCategory": "Oils",
                        "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                        "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                    },
                    {
                        "text": "1⁄3 cup chicken broth",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "chicken broth",
                        "weight": 80,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    },
                    {
                        "text": "1 tbsp. lemon juice",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "lemon juice",
                        "weight": 15.2499999997422,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    }
                ],
                "calories": 2946.8734544443414,
                "totalCO2Emissions": 18847.96475126867,
                "co2EmissionsClass": "G",
                "totalWeight": 1952.5561994970271,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2946.8734544443414,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 215.48555739154332,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 55.58003945215588,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.307358109008,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 95.22079779923156,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 47.950426085951136,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 7.596479401581718,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 6.080076216262687,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.516403185319031,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 1.6855022940094988,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 232.15536410815903,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 927.7284348,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4519.41303439485,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 166.9705266469297,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 260.900475822956,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2509.576081832307,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.87867851361276,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 16.360325204333144,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1845.6480485431778,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 508.21568280279973,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 25.80208994230023,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7782006349551372,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.5612761408719598,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 85.24058884141574,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.3909297804602785,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 82.06446071874831,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 82.06446071874831,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.82469086384,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.4675424928,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.708642466975604,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 48.163656537598726,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 902.8696276508764,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 147.34367272221706,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 331.5162421408359,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 277.9001972607794,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 2.532159800527239,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.065612741276124,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 464.31072821631807,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 309.2428116,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 188.30887643311877,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 16.69705266469297,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 62.11916091022763,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 53.3952357836661,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 65.99265840895978,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 148.7302291303013,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 263.6640069347397,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 56.46840920031108,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 28.668988824778033,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 64.8500529129281,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 120.09816468245845,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 532.7536802588484,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 337.76382926617526,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.516115179687077,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 159.36211932666666,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.45028328533333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 58.057616446504035,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 40.13638044799894,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 215.48555739154332,
                        "hasRDI": true,
                        "daily": 331.5162421408359,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 55.58003945215588,
                                "hasRDI": true,
                                "daily": 277.9001972607794,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.307358109008,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 95.22079779923156,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 47.950426085951136,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 7.596479401581718,
                        "hasRDI": true,
                        "daily": 2.532159800527239,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 6.080076216262687,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.516403185319031,
                                "hasRDI": true,
                                "daily": 6.065612741276124,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 1.6855022940094988,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 232.15536410815903,
                        "hasRDI": true,
                        "daily": 464.31072821631807,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 927.7284348,
                        "hasRDI": true,
                        "daily": 309.2428116,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4519.41303439485,
                        "hasRDI": true,
                        "daily": 188.30887643311877,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 166.9705266469297,
                        "hasRDI": true,
                        "daily": 16.69705266469297,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 260.900475822956,
                        "hasRDI": true,
                        "daily": 62.11916091022763,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2509.576081832307,
                        "hasRDI": true,
                        "daily": 53.3952357836661,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.87867851361276,
                        "hasRDI": true,
                        "daily": 65.99265840895978,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 16.360325204333144,
                        "hasRDI": true,
                        "daily": 148.7302291303013,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1845.6480485431778,
                        "hasRDI": true,
                        "daily": 263.6640069347397,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 508.21568280279973,
                        "hasRDI": true,
                        "daily": 56.46840920031108,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 25.80208994230023,
                        "hasRDI": true,
                        "daily": 28.668988824778033,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7782006349551372,
                        "hasRDI": true,
                        "daily": 64.8500529129281,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.5612761408719598,
                        "hasRDI": true,
                        "daily": 120.09816468245845,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 85.24058884141574,
                        "hasRDI": true,
                        "daily": 532.7536802588484,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.3909297804602785,
                        "hasRDI": true,
                        "daily": 337.76382926617526,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 82.06446071874831,
                        "hasRDI": true,
                        "daily": 20.516115179687077,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 82.06446071874831,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.82469086384,
                        "hasRDI": true,
                        "daily": 159.36211932666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.4675424928,
                        "hasRDI": true,
                        "daily": 16.45028328533333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.708642466975604,
                        "hasRDI": true,
                        "daily": 58.057616446504035,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 48.163656537598726,
                        "hasRDI": true,
                        "daily": 40.13638044799894,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 902.8696276508764,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/2fd7b723ad76418ba917eada104b8b7a?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2463f2482609d7a471dbbf3b268bd956",
                "label": "Catalan Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2711c4ad72027654ebad2b5fa7130ccea056b501633eb42d447d85f30c42d1c4",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e9f419fb4d5f4527117e681b460c9c0687f32f325e3ac9f84108f58d74b269fb",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bf04886527975d0b03079591c1089512b4b2e6cb36b3753927bd0e3f0e7d158c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2711c4ad72027654ebad2b5fa7130ccea056b501633eb42d447d85f30c42d1c4",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0748ecf2e2fce4f9e84578a4932b93985a0c62dcd855fc861859901417e5959a",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Bon Appetit",
                "url": "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
                "shareAs": "http://www.edamam.com/recipe/catalan-chicken-2463f2482609d7a471dbbf3b268bd956/chicken",
                "yield": 14,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "No oil added",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 whole 4-pound chicken, quartered",
                    "8 slices bacon",
                    "30 cloves garlic",
                    "3 lemons, peeled, rinds thinly sliced and reserved",
                    "½ cup Banyuls or another fortified dessert wine",
                    "1 cup veal or chicken stock"
                ],
                "ingredients": [
                    {
                        "text": "1 whole 4-pound chicken, quartered",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "chicken",
                        "weight": 1200,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "8 slices bacon",
                        "quantity": 8,
                        "measure": "slice",
                        "food": "bacon",
                        "weight": 232,
                        "foodCategory": "cured meats",
                        "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                        "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                    },
                    {
                        "text": "30 cloves garlic",
                        "quantity": 30,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 90,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "3 lemons, peeled, rinds thinly sliced and reserved",
                        "quantity": 3,
                        "measure": "<unit>",
                        "food": "lemons",
                        "weight": 252,
                        "foodCategory": "fruit",
                        "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                        "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                    },
                    {
                        "text": "½ cup Banyuls or another fortified dessert wine",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "dessert wine",
                        "weight": 51.5,
                        "foodCategory": "wines",
                        "foodId": "food_a9b1edjayi2e3kae6qvpvb0l2zaf",
                        "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
                    },
                    {
                        "text": "1 cup veal or chicken stock",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "chicken stock",
                        "weight": 240,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    }
                ],
                "calories": 3867.7400000000002,
                "totalCO2Emissions": 17305.116161612,
                "co2EmissionsClass": "F",
                "totalWeight": 2065.5,
                "totalTime": 0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3867.74,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 271.35799999999995,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 81.90078,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.5050400000000002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 113.20241999999999,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 53.08278,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 68.8039,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 59.85790000000001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.946,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 15.8107,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 269.63100000000003,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1060.32,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2950.495,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 385.65999999999997,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 327.055,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3742.3600000000006,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.3512,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 19.932049999999997,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2396.5750000000003,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 522.4399999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 181.32,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.7343899999999999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9905899999999996,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 95.71009499999998,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.281119999999999,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 114.42000000000002,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 114.42000000000002,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 4.88,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.3280000000000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 5.1196,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 20.01,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1434.9515,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 193.387,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 417.47384615384607,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 409.5039,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 22.93463333333333,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 35.784,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 539.2620000000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 353.44,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 122.93729166666667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 38.566,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 77.8702380952381,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 79.62468085106384,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 85.28444444444445,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 181.2004545454545,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 342.3678571428572,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 58.04888888888888,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 201.46666666666667,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 144.5325,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 153.12230769230766,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 598.1880937499999,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 483.1630769230768,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 28.605000000000004,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 203.33333333333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 22.186666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 34.13066666666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 16.675,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 271.35799999999995,
                        "hasRDI": true,
                        "daily": 417.47384615384607,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 81.90078,
                                "hasRDI": true,
                                "daily": 409.5039,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.5050400000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 113.20241999999999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 53.08278,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 68.8039,
                        "hasRDI": true,
                        "daily": 22.93463333333333,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 59.85790000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 8.946,
                                "hasRDI": true,
                                "daily": 35.784,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 15.8107,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 269.63100000000003,
                        "hasRDI": true,
                        "daily": 539.2620000000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1060.32,
                        "hasRDI": true,
                        "daily": 353.44,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2950.495,
                        "hasRDI": true,
                        "daily": 122.93729166666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 385.65999999999997,
                        "hasRDI": true,
                        "daily": 38.566,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 327.055,
                        "hasRDI": true,
                        "daily": 77.8702380952381,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3742.3600000000006,
                        "hasRDI": true,
                        "daily": 79.62468085106384,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.3512,
                        "hasRDI": true,
                        "daily": 85.28444444444445,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 19.932049999999997,
                        "hasRDI": true,
                        "daily": 181.2004545454545,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2396.5750000000003,
                        "hasRDI": true,
                        "daily": 342.3678571428572,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 522.4399999999999,
                        "hasRDI": true,
                        "daily": 58.04888888888888,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 181.32,
                        "hasRDI": true,
                        "daily": 201.46666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.7343899999999999,
                        "hasRDI": true,
                        "daily": 144.5325,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9905899999999996,
                        "hasRDI": true,
                        "daily": 153.12230769230766,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 95.71009499999998,
                        "hasRDI": true,
                        "daily": 598.1880937499999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.281119999999999,
                        "hasRDI": true,
                        "daily": 483.1630769230768,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 114.42000000000002,
                        "hasRDI": true,
                        "daily": 28.605000000000004,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 114.42000000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 4.88,
                        "hasRDI": true,
                        "daily": 203.33333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.3280000000000003,
                        "hasRDI": true,
                        "daily": 22.186666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 5.1196,
                        "hasRDI": true,
                        "daily": 34.13066666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 20.01,
                        "hasRDI": true,
                        "daily": 16.675,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1434.9515,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/2463f2482609d7a471dbbf3b268bd956?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3da1169eb633a5e4607890ebf7dee89f",
                "label": "Grilled Butterflied Chicken Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=89bf0a7d383bb7379f753ce89173b16a82b73806455c317de6140afbe0b4a827",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df5e68c38dd5e929b764cca9c3b2fc7cde740a1d47ec64860faceabe1bb4356d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=63799b97b0861a9a99f1f820976299ed5425ca8a149109a622354c5900f69962",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=89bf0a7d383bb7379f753ce89173b16a82b73806455c317de6140afbe0b4a827",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a2/7a2f41a7891e8a8f8a087a96930c6463-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a78795084236453b0f7d0f20bb95bb12ad5621269b00548714905415f19b57a",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/grilled-butterflied-chicken-recipe-3da1169eb633a5e4607890ebf7dee89f/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 whole chicken, 3 1/2 to 4 pounds",
                    "Kosher salt and freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 whole chicken, 3 1/2 to 4 pounds",
                        "quantity": 3.75,
                        "measure": "pound",
                        "food": "chicken",
                        "weight": 1700.9713875,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 10.205828325,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 5.1029141625,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 2499.628483072875,
                "totalCO2Emissions": 16814.7931000151,
                "co2EmissionsClass": "G",
                "totalWeight": 1714.2102777030866,
                "totalTime": 60,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2499.628483072875,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 174.8220970701975,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 49.922999931708745,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.121960727195,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 72.21332845006087,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 37.41106263839175,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 3.265865064,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.9748277808875,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.2910372831125,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.03265865064,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 215.6695641639,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 867.495407625,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3967.4416670301107,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 151.79120377461578,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 240.13945167828086,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2254.608063659497,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.932286577612686,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.221113774424337,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1708.35360332175,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 475.60860965887497,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.506568696,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6995074733954999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.3971778976925,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 78.7110901794525,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.063161382462875,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 70.267128017625,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 70.267128017625,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.58564768485,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.313321087,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.52305193779,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 25.718687379000002,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 764.0500949323937,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 124.98142415364374,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 268.95707241568846,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 249.61499965854372,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.0886216880000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 5.164149132450001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 431.3391283278,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 289.165135875,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 165.31006945958796,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 15.17912037746158,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.1760599234002,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 47.97038433318079,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 60.73492543118159,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 138.3737615856758,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 244.05051476024997,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 52.845401073208336,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 20.562854106666666,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 58.292289449624995,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 107.47522289942307,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 491.9443136215781,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 312.5508755740673,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 17.56678200440625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 149.40198686875001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 15.422140579999999,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 23.487012918599998,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 21.4322394825,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 174.8220970701975,
                        "hasRDI": true,
                        "daily": 268.95707241568846,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 49.922999931708745,
                                "hasRDI": true,
                                "daily": 249.61499965854372,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.121960727195,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 72.21332845006087,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 37.41106263839175,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 3.265865064,
                        "hasRDI": true,
                        "daily": 1.0886216880000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.9748277808875,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.2910372831125,
                                "hasRDI": true,
                                "daily": 5.164149132450001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.03265865064,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 215.6695641639,
                        "hasRDI": true,
                        "daily": 431.3391283278,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 867.495407625,
                        "hasRDI": true,
                        "daily": 289.165135875,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3967.4416670301107,
                        "hasRDI": true,
                        "daily": 165.31006945958796,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 151.79120377461578,
                        "hasRDI": true,
                        "daily": 15.17912037746158,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 240.13945167828086,
                        "hasRDI": true,
                        "daily": 57.1760599234002,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2254.608063659497,
                        "hasRDI": true,
                        "daily": 47.97038433318079,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.932286577612686,
                        "hasRDI": true,
                        "daily": 60.73492543118159,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.221113774424337,
                        "hasRDI": true,
                        "daily": 138.3737615856758,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1708.35360332175,
                        "hasRDI": true,
                        "daily": 244.05051476024997,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 475.60860965887497,
                        "hasRDI": true,
                        "daily": 52.845401073208336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 18.506568696,
                        "hasRDI": true,
                        "daily": 20.562854106666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6995074733954999,
                        "hasRDI": true,
                        "daily": 58.292289449624995,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.3971778976925,
                        "hasRDI": true,
                        "daily": 107.47522289942307,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 78.7110901794525,
                        "hasRDI": true,
                        "daily": 491.9443136215781,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.063161382462875,
                        "hasRDI": true,
                        "daily": 312.5508755740673,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 70.267128017625,
                        "hasRDI": true,
                        "daily": 17.56678200440625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 70.267128017625,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.58564768485,
                        "hasRDI": true,
                        "daily": 149.40198686875001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.313321087,
                        "hasRDI": true,
                        "daily": 15.422140579999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.52305193779,
                        "hasRDI": true,
                        "daily": 23.487012918599998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 25.718687379000002,
                        "hasRDI": true,
                        "daily": 21.4322394825,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 764.0500949323937,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "chicken",
                    "grilling",
                    "grilled chicken",
                    "barbecue chicken",
                    "grill",
                    "the food lab"
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/3da1169eb633a5e4607890ebf7dee89f?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
                "label": "Baked Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ca434b232c0c9c32ad9f9c7eb0e5bc26a0e3d777185f0fdca00b8902fff7b99",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86f3ca55f8c240f6f7fbc37a437365d5a19296c1193e7317cdbea663809668f4",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d191cdaa5c5eabf16862b0d52bd33ccb5ed1943f3e7c82e3b38f3e9e8e5dc545",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ca434b232c0c9c32ad9f9c7eb0e5bc26a0e3d777185f0fdca00b8902fff7b99",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fcf9e74f6a6108d4ca36f9d6d697f30d8234cca64d137a3e92e87165d9690ced",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/318981/baked-chicken",
                "shareAs": "http://www.edamam.com/recipe/baked-chicken-be3ba087e212f13672b553ecfa876333/chicken",
                "yield": 4,
                "dietLabels": [
                    "High-Protein",
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
                    "1/2 teaspoon coarse salt",
                    "1/2 teaspoon Mrs. Dash seasoning",
                    "1/4 teaspoon freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
                        "quantity": 6,
                        "measure": "half",
                        "food": "chicken breast",
                        "weight": 522,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "1/2 teaspoon coarse salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "coarse salt",
                        "weight": 2.4270833334564377,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/2 teaspoon Mrs. Dash seasoning",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "seasoning",
                        "weight": 0.75,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                        "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
                    },
                    {
                        "text": "1/4 teaspoon freshly ground black pepper",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "black pepper",
                        "weight": 0.575,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 630.14575,
                "totalCO2Emissions": 5157.676466250211,
                "co2EmissionsClass": "F",
                "totalWeight": 525.7520833334565,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 630.14575,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 13.751619999999999,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 2.971527499999999,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.036539999999999996,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 3.6099042499999996,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.2335684999999996,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.8599999999999999,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 0.6297749999999999,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.230225,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.01718,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 117.58172499999998,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 381.06,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1176.925833381098,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 36.69975000002954,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 148.84752083333456,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1756.4516666666766,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.259991875000406,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.5824195833334564,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1114.051,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 48.12525,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.09,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.49328099999999997,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.9264074999999998,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 50.140829999999994,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.244993249999999,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 48.11274999999999,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 48.11274999999999,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.0961999999999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.93908,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.980499999999999,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 385.9045541666669,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 31.507287500000004,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 21.156338461538457,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 14.857637499999996,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0.2866666666666666,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.9209,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 235.16344999999993,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 127.02,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 49.038576390879086,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 3.669975000002954,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 35.439885912698706,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 37.3713120567378,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.555510416668923,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 32.56745075757687,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 159.15014285714284,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5.347250000000001,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 0.1,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 41.10675,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 71.26211538461537,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 313.3801875,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 326.5379423076923,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 12.028187499999996,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 45.675,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 19.593866666666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.817083333333333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 13.751619999999999,
                        "hasRDI": true,
                        "daily": 21.156338461538457,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 2.971527499999999,
                                "hasRDI": true,
                                "daily": 14.857637499999996,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.036539999999999996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 3.6099042499999996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.2335684999999996,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0.8599999999999999,
                        "hasRDI": true,
                        "daily": 0.2866666666666666,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0.6297749999999999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.230225,
                                "hasRDI": true,
                                "daily": 0.9209,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.01718,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 117.58172499999998,
                        "hasRDI": true,
                        "daily": 235.16344999999993,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 381.06,
                        "hasRDI": true,
                        "daily": 127.02,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1176.925833381098,
                        "hasRDI": true,
                        "daily": 49.038576390879086,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 36.69975000002954,
                        "hasRDI": true,
                        "daily": 3.669975000002954,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 148.84752083333456,
                        "hasRDI": true,
                        "daily": 35.439885912698706,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1756.4516666666766,
                        "hasRDI": true,
                        "daily": 37.3713120567378,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.259991875000406,
                        "hasRDI": true,
                        "daily": 12.555510416668923,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.5824195833334564,
                        "hasRDI": true,
                        "daily": 32.56745075757687,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1114.051,
                        "hasRDI": true,
                        "daily": 159.15014285714284,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 48.12525,
                        "hasRDI": true,
                        "daily": 5.347250000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 0.09,
                        "hasRDI": true,
                        "daily": 0.1,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.49328099999999997,
                        "hasRDI": true,
                        "daily": 41.10675,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.9264074999999998,
                        "hasRDI": true,
                        "daily": 71.26211538461537,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 50.140829999999994,
                        "hasRDI": true,
                        "daily": 313.3801875,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.244993249999999,
                        "hasRDI": true,
                        "daily": 326.5379423076923,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 48.11274999999999,
                        "hasRDI": true,
                        "daily": 12.028187499999996,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 48.11274999999999,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.0961999999999998,
                        "hasRDI": true,
                        "daily": 45.675,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.93908,
                        "hasRDI": true,
                        "daily": 19.593866666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 6.980499999999999,
                        "hasRDI": true,
                        "daily": 5.817083333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 385.9045541666669,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/be3ba087e212f13672b553ecfa876333?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_708c612ee5a166b19b1675d98c045597",
                "label": "Homemade Essence of Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/df6/df66315da1a1af6da079838eda6fa935.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3eb6d08d5c1e779fdd986bacde4101f2e5581f31cfad0ddd7022d6cf032dcf83",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df6/df66315da1a1af6da079838eda6fa935-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=76923dfa6ea3dcec5b1df26ead73cc58a6d70784f58f78015f792e6b2c5b5dd7",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df6/df66315da1a1af6da079838eda6fa935-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ab3537ac2f3b1bf2d71bcdd81ead487a32590a6cc089131f636d45ea15af3ed",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df6/df66315da1a1af6da079838eda6fa935.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3eb6d08d5c1e779fdd986bacde4101f2e5581f31cfad0ddd7022d6cf032dcf83",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df6/df66315da1a1af6da079838eda6fa935-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=941d14f8c55eaea417b1e7372b91ecdbb82013f821ec8047171fb2dcffb9b13f",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/81195-homemade-essence-of-chicken",
                "shareAs": "http://www.edamam.com/recipe/homemade-essence-of-chicken-708c612ee5a166b19b1675d98c045597/chicken",
                "yield": 8,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Sugar",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 whole chicken (or 3 chicken carcasses), cut up into chunks",
                    "1/3 cup water",
                    "2 pinches salt"
                ],
                "ingredients": [
                    {
                        "text": "1 whole chicken (or 3 chicken carcasses), cut up into chunks",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "chicken",
                        "weight": 1200,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "1/3 cup water",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "water",
                        "weight": 78.86274549999999,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "2 pinches salt",
                        "quantity": 2,
                        "measure": "pinch",
                        "food": "salt",
                        "weight": 0.760416667630894,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    }
                ],
                "calories": 2580,
                "totalCO2Emissions": 11844.403020833843,
                "co2EmissionsClass": "F",
                "totalWeight": 1279.6231621676309,
                "totalTime": 180,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2580,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 181.2,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 51.72,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.1640000000000001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 74.88,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 38.76,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 223.20000000000002,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 900,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1138.1961768607869,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 134.54838236523142,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 240.79623162167633,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2268.0608333334103,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.802509375003183,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.728646691217632,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1764,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 492,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 19.200000000000003,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.72,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.44,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 81.6,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.199999999999999,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 72,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 72,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.7199999999999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.4000000000000004,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.5999999999999996,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 18,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 870.7854035878352,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 129,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 278.7692307692308,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 258.6,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 446.4,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 300,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 47.424840702532784,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 13.454838236523141,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.33243610039913,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 48.256613475178945,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 60.01394097223991,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 142.98769719288757,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 252,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 54.666666666666664,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 21.333333333333336,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 60,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 110.76923076923076,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 509.99999999999994,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 323.07692307692304,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 18,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 155,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.000000000000004,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 23.999999999999996,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 15,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 181.2,
                        "hasRDI": true,
                        "daily": 278.7692307692308,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 51.72,
                                "hasRDI": true,
                                "daily": 258.6,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.1640000000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 74.88,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 38.76,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0,
                                "hasRDI": true,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 223.20000000000002,
                        "hasRDI": true,
                        "daily": 446.4,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 900,
                        "hasRDI": true,
                        "daily": 300,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1138.1961768607869,
                        "hasRDI": true,
                        "daily": 47.424840702532784,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 134.54838236523142,
                        "hasRDI": true,
                        "daily": 13.454838236523141,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 240.79623162167633,
                        "hasRDI": true,
                        "daily": 57.33243610039913,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2268.0608333334103,
                        "hasRDI": true,
                        "daily": 48.256613475178945,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.802509375003183,
                        "hasRDI": true,
                        "daily": 60.01394097223991,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.728646691217632,
                        "hasRDI": true,
                        "daily": 142.98769719288757,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1764,
                        "hasRDI": true,
                        "daily": 252,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 492,
                        "hasRDI": true,
                        "daily": 54.666666666666664,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 19.200000000000003,
                        "hasRDI": true,
                        "daily": 21.333333333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.72,
                        "hasRDI": true,
                        "daily": 60,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.44,
                        "hasRDI": true,
                        "daily": 110.76923076923076,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 81.6,
                        "hasRDI": true,
                        "daily": 509.99999999999994,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.199999999999999,
                        "hasRDI": true,
                        "daily": 323.07692307692304,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 72,
                        "hasRDI": true,
                        "daily": 18,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 72,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.7199999999999998,
                        "hasRDI": true,
                        "daily": 155,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.4000000000000004,
                        "hasRDI": true,
                        "daily": 16.000000000000004,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.5999999999999996,
                        "hasRDI": true,
                        "daily": 23.999999999999996,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 18,
                        "hasRDI": true,
                        "daily": 15,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 870.7854035878352,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/708c612ee5a166b19b1675d98c045597?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_888e9fc4a808e9e4ccdb2ac24a6a2f46",
                "label": "Chicken Teriyaki",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/551/551b906bafd4c45d50033742eaf00c02.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fdf227fe36483ef9681f7bd33d451c81eb45cf019b268183fc6a4bc7ccc5ffc9",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/551/551b906bafd4c45d50033742eaf00c02-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=425da93e30ce04bc8a5f47420d422ca50f5d0871ae12eff33faad4a4e4c5a363",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/551/551b906bafd4c45d50033742eaf00c02-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64c2fb804a1e66ddaad30b74c315d55fb7124e805dec1f3cc7729bff16806bf7",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/551/551b906bafd4c45d50033742eaf00c02.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fdf227fe36483ef9681f7bd33d451c81eb45cf019b268183fc6a4bc7ccc5ffc9",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/551/551b906bafd4c45d50033742eaf00c02-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0fe92fa3d4416f9f2a85ef1c26074a85f79428d84c8466e4a1bf28df0452586e",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Saveur",
                "url": "http://www.saveur.com/article/Recipes/Chicken-Teriyaki",
                "shareAs": "http://www.edamam.com/recipe/chicken-teriyaki-888e9fc4a808e9e4ccdb2ac24a6a2f46/chicken",
                "yield": 2,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 tbsp. vegetable oil",
                    "4 pieces chicken, trimmed, skin pierced with a fork",
                    "½ cup Teriyaki Sauce"
                ],
                "ingredients": [
                    {
                        "text": "1 tbsp. vegetable oil",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "vegetable oil",
                        "weight": 14,
                        "foodCategory": "Oils",
                        "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "4 pieces chicken, trimmed, skin pierced with a fork",
                        "quantity": 4,
                        "measure": "piece",
                        "food": "chicken",
                        "weight": 357.6,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "½ cup Teriyaki Sauce",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "Teriyaki Sauce",
                        "weight": 144,
                        "foodCategory": "canned soup",
                        "foodId": "food_a1ams9uatame3sa7rv6s8b5oanh7",
                        "image": "https://www.edamam.com/food-img/09e/09ea224087dca731115d8a7501e121aa.jpg"
                    }
                ],
                "calories": 1020.7600000000001,
                "totalCO2Emissions": 3847.24520157,
                "co2EmissionsClass": "F",
                "totalWeight": 515.6,
                "totalTime": 0,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1020.7600000000001,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 68.02640000000001,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 16.32396,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.4542520000000001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 32.39424000000001,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 13.944480000000002,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 22.464,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 22.32,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.144,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 20.304,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 75.0528,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 268.20000000000005,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 5765.5199999999995,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 75.33600000000001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 159.36,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 999.8640000000001,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 5.6664,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.828560000000001,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 747.432,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 146.616,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 5.721600000000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.25776000000000004,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.5299200000000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 26.145600000000005,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.3956,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 32.976,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 32.976,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.1085600000000002,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.7152000000000002,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.1248000000000005,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 5.364000000000001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 333.504,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 51.038000000000004,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 104.65600000000002,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 81.6198,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 7.487999999999999,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 0.576,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 150.1056,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 89.4,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 240.23,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 7.533600000000002,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 37.94285714285715,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 21.273702127659575,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 31.48,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 43.89600000000001,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 106.776,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 16.29066666666667,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 6.357333333333334,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 21.480000000000004,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 40.76307692307692,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 163.41000000000003,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 107.35384615384615,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 8.244,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 46.19000000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.768000000000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 27.49866666666667,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.470000000000001,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 68.02640000000001,
                        "hasRDI": true,
                        "daily": 104.65600000000002,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 16.32396,
                                "hasRDI": true,
                                "daily": 81.6198,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.4542520000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 32.39424000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 13.944480000000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 22.464,
                        "hasRDI": true,
                        "daily": 7.487999999999999,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 22.32,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 0.144,
                                "hasRDI": true,
                                "daily": 0.576,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 20.304,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 75.0528,
                        "hasRDI": true,
                        "daily": 150.1056,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 268.20000000000005,
                        "hasRDI": true,
                        "daily": 89.4,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 5765.5199999999995,
                        "hasRDI": true,
                        "daily": 240.23,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 75.33600000000001,
                        "hasRDI": true,
                        "daily": 7.533600000000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 159.36,
                        "hasRDI": true,
                        "daily": 37.94285714285715,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 999.8640000000001,
                        "hasRDI": true,
                        "daily": 21.273702127659575,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 5.6664,
                        "hasRDI": true,
                        "daily": 31.48,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.828560000000001,
                        "hasRDI": true,
                        "daily": 43.89600000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 747.432,
                        "hasRDI": true,
                        "daily": 106.776,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 146.616,
                        "hasRDI": true,
                        "daily": 16.29066666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 5.721600000000001,
                        "hasRDI": true,
                        "daily": 6.357333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.25776000000000004,
                        "hasRDI": true,
                        "daily": 21.480000000000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.5299200000000001,
                        "hasRDI": true,
                        "daily": 40.76307692307692,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 26.145600000000005,
                        "hasRDI": true,
                        "daily": 163.41000000000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.3956,
                        "hasRDI": true,
                        "daily": 107.35384615384615,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 32.976,
                        "hasRDI": true,
                        "daily": 8.244,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 32.976,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.1085600000000002,
                        "hasRDI": true,
                        "daily": 46.19000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.7152000000000002,
                        "hasRDI": true,
                        "daily": 4.768000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.1248000000000005,
                        "hasRDI": true,
                        "daily": 27.49866666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 5.364000000000001,
                        "hasRDI": true,
                        "daily": 4.470000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 333.504,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/888e9fc4a808e9e4ccdb2ac24a6a2f46?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c7fd94e774142c50bd1d0db8f22281f4",
                "label": "Chicken tikka burgers",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fac/facc77af97408313db804900e9554bd7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0cb6029e7252d212d6bdc447b070dbcec23345f91cc3b86a318276e1581c40f0",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fac/facc77af97408313db804900e9554bd7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=47339b3eb87aecaa744eb9747e6d08454e9ab1d11b98078ea060c88cd278e50b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fac/facc77af97408313db804900e9554bd7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=84df622bae8f818796788a0f0da377a73a9e0c1118508a472f1ce3818ab9f480",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fac/facc77af97408313db804900e9554bd7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0cb6029e7252d212d6bdc447b070dbcec23345f91cc3b86a318276e1581c40f0",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC Good Food",
                "url": "https://www.bbcgoodfood.com/recipes/chicken-tikka-burgers",
                "shareAs": "http://www.edamam.com/recipe/chicken-tikka-burgers-c7fd94e774142c50bd1d0db8f22281f4/chicken",
                "yield": 6,
                "dietLabels": [
                    "High-Protein"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Mediterranean",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "6 small chicken breasts",
                    "6 burger buns (we used ciabatta)"
                ],
                "ingredients": [
                    {
                        "text": "6 small chicken breasts",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "chicken breasts",
                        "weight": 1224,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "6 burger buns (we used ciabatta)",
                        "quantity": 6,
                        "measure": "<unit>",
                        "food": "burger buns",
                        "weight": 264,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_biei7e8ap2juekb162j79bu40fsu",
                        "image": "https://www.edamam.com/food-img/dbe/dbe3d135d1336ed19703d359e33d58dd.jpg"
                    }
                ],
                "calories": 2205.36,
                "totalCO2Emissions": 12495.359999999999,
                "co2EmissionsClass": "F",
                "totalWeight": 1488,
                "totalTime": 15,
                "cuisineType": [
                    "indian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2205.36,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 42.391200000000005,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 9.113999999999999,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.15696,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 10.408079999999998,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 9.88896,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 132.264,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 127.51200000000001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.752000000000001,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 19.2192,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 301.1928,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 893.52,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1854.96,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 441.36,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 403.44000000000005,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4410.24,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.584000000000001,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 10.250399999999999,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2873.7599999999998,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 186.72,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.4320000000000004,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 2.58408,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.95056,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 128.5392,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 10.092960000000001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 456,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 218.39999999999998,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 139.92000000000002,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.0984,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 7.5672000000000015,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 12.672,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 995.0880000000001,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 110.268,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 65.21723076923078,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 45.56999999999999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 44.08800000000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 19.008000000000003,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 602.3856,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 297.84,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 77.29,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 44.136,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 96.05714285714288,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 93.83489361702128,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 75.46666666666667,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 93.18545454545455,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 410.53714285714284,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 20.746666666666666,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.813333333333334,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 215.34000000000003,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 226.96615384615382,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 803.37,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 776.3815384615385,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 114,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 129.1,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 50.44800000000001,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.56,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 42.391200000000005,
                        "hasRDI": true,
                        "daily": 65.21723076923078,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 9.113999999999999,
                                "hasRDI": true,
                                "daily": 45.56999999999999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.15696,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 10.408079999999998,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 9.88896,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 132.264,
                        "hasRDI": true,
                        "daily": 44.08800000000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 127.51200000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 4.752000000000001,
                                "hasRDI": true,
                                "daily": 19.008000000000003,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 19.2192,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 301.1928,
                        "hasRDI": true,
                        "daily": 602.3856,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 893.52,
                        "hasRDI": true,
                        "daily": 297.84,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1854.96,
                        "hasRDI": true,
                        "daily": 77.29,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 441.36,
                        "hasRDI": true,
                        "daily": 44.136,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 403.44000000000005,
                        "hasRDI": true,
                        "daily": 96.05714285714288,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4410.24,
                        "hasRDI": true,
                        "daily": 93.83489361702128,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.584000000000001,
                        "hasRDI": true,
                        "daily": 75.46666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 10.250399999999999,
                        "hasRDI": true,
                        "daily": 93.18545454545455,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2873.7599999999998,
                        "hasRDI": true,
                        "daily": 410.53714285714284,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 186.72,
                        "hasRDI": true,
                        "daily": 20.746666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 3.4320000000000004,
                        "hasRDI": true,
                        "daily": 3.813333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 2.58408,
                        "hasRDI": true,
                        "daily": 215.34000000000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.95056,
                        "hasRDI": true,
                        "daily": 226.96615384615382,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 128.5392,
                        "hasRDI": true,
                        "daily": 803.37,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 10.092960000000001,
                        "hasRDI": true,
                        "daily": 776.3815384615385,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 456,
                        "hasRDI": true,
                        "daily": 114,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 218.39999999999998,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 139.92000000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.0984,
                        "hasRDI": true,
                        "daily": 129.1,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 7.5672000000000015,
                        "hasRDI": true,
                        "daily": 50.44800000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 12.672,
                        "hasRDI": true,
                        "daily": 10.56,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 995.0880000000001,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/c7fd94e774142c50bd1d0db8f22281f4?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_01208d9fc02a4cabbbad21c03493d233",
                "label": "Chicken Vesuvio Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/24b/24bc38d88c6e63542213606deb27e339.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b4e444c9c15af7c1142872648aae9b3b8c91f501344e9957e97cc63c88fe197",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/24b/24bc38d88c6e63542213606deb27e339-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8cc9f1b0aaaf54e6a377962bfcad064b07541d492d3adc8acddf20279297328",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/24b/24bc38d88c6e63542213606deb27e339-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d475782a836c84402205cb4316b6072037e90aaf339684011b71b48717751c5b",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/24b/24bc38d88c6e63542213606deb27e339.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b4e444c9c15af7c1142872648aae9b3b8c91f501344e9957e97cc63c88fe197",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/chicken-vesuvio-recipe",
                "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-recipe-01208d9fc02a4cabbbad21c03493d233/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/2 cup olive oil",
                    "5 cloves garlic, peeled",
                    "2 large russet potatoes, peeled and cut into chunks",
                    "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                    "3/4 cup white wine",
                    "3/4 cup chicken stock",
                    "3 tablespoons chopped parsley",
                    "1 tablespoon dried oregano",
                    "Salt and pepper",
                    "1 cup frozen peas, thawed"
                ],
                "ingredients": [
                    {
                        "text": "1/2 cup olive oil",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "olive oil",
                        "weight": 108,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "5 cloves garlic, peeled",
                        "quantity": 5,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 15,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 large russet potatoes, peeled and cut into chunks",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "russet potatoes",
                        "weight": 738,
                        "foodCategory": "vegetables",
                        "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
                        "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
                    },
                    {
                        "text": "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                        "quantity": 3.5,
                        "measure": "pound",
                        "food": "chicken",
                        "weight": 1587.5732950000001,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "3/4 cup white wine",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "white wine",
                        "weight": 176.39999999999998,
                        "foodCategory": "wines",
                        "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                        "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                    },
                    {
                        "text": "3/4 cup chicken stock",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "chicken stock",
                        "weight": 180,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    },
                    {
                        "text": "3 tablespoons chopped parsley",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "parsley",
                        "weight": 11.399999999999999,
                        "foodCategory": "vegetables",
                        "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                        "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                    },
                    {
                        "text": "1 tablespoon dried oregano",
                        "quantity": 1,
                        "measure": "tablespoon",
                        "food": "dried oregano",
                        "weight": 2.9999999997971143,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                        "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 17.720239769998784,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 8.860119884999392,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 cup frozen peas, thawed",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "frozen peas",
                        "weight": 134,
                        "foodCategory": "vegetables",
                        "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                        "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                    }
                ],
                "calories": 4228.043058200812,
                "totalCO2Emissions": 18840.290375726545,
                "co2EmissionsClass": "G",
                "totalWeight": 2976.850615011728,
                "totalTime": 60,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4228.043058200812,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 274.8807258388423,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 62.48877179625835,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.047163345382,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 147.43272633938867,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 47.325709847829515,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 176.16649672625982,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 156.3346863954412,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 19.83181033081862,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 16.239344767255698,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 230.7277828196217,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 815.06238045,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 6888.614561646298,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 400.1669415837647,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 478.17694512407047,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5918.26816921209,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 22.546382966577653,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 18.34151553861297,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2231.0712550999992,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 635.3716670147774,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 103.72979744959534,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.7264528338354403,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9119200245119274,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 86.91844652747957,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 6.886987390963237,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 276.2712108159691,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 276.2712108159691,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.34660450586,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.1590996812000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 19.68389476856687,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 353.35044421913705,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1739.2449441818587,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 211.4021529100406,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 422.8934243674497,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 312.4438589812918,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 58.72216557541994,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 79.32724132327448,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 461.45556563924333,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 271.68746015,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 287.0256067352624,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 40.016694158376474,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 113.85165360096916,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 125.92059934493808,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 125.25768314765362,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 166.741050351027,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 318.7244650142856,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 70.59685189053081,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 115.25533049955037,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 143.8710694862867,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 147.0707711163021,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 543.2402907967473,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 529.768260843326,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 69.06780270399227,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 139.44185441083332,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 14.393997874666669,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 131.22596512377913,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 294.45870351594755,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 274.8807258388423,
                        "hasRDI": true,
                        "daily": 422.8934243674497,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 62.48877179625835,
                                "hasRDI": true,
                                "daily": 312.4438589812918,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.047163345382,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 147.43272633938867,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 47.325709847829515,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 176.16649672625982,
                        "hasRDI": true,
                        "daily": 58.72216557541994,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 156.3346863954412,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 19.83181033081862,
                                "hasRDI": true,
                                "daily": 79.32724132327448,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 16.239344767255698,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 230.7277828196217,
                        "hasRDI": true,
                        "daily": 461.45556563924333,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 815.06238045,
                        "hasRDI": true,
                        "daily": 271.68746015,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 6888.614561646298,
                        "hasRDI": true,
                        "daily": 287.0256067352624,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 400.1669415837647,
                        "hasRDI": true,
                        "daily": 40.016694158376474,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 478.17694512407047,
                        "hasRDI": true,
                        "daily": 113.85165360096916,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5918.26816921209,
                        "hasRDI": true,
                        "daily": 125.92059934493808,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 22.546382966577653,
                        "hasRDI": true,
                        "daily": 125.25768314765362,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 18.34151553861297,
                        "hasRDI": true,
                        "daily": 166.741050351027,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2231.0712550999992,
                        "hasRDI": true,
                        "daily": 318.7244650142856,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 635.3716670147774,
                        "hasRDI": true,
                        "daily": 70.59685189053081,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 103.72979744959534,
                        "hasRDI": true,
                        "daily": 115.25533049955037,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.7264528338354403,
                        "hasRDI": true,
                        "daily": 143.8710694862867,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9119200245119274,
                        "hasRDI": true,
                        "daily": 147.0707711163021,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 86.91844652747957,
                        "hasRDI": true,
                        "daily": 543.2402907967473,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 6.886987390963237,
                        "hasRDI": true,
                        "daily": 529.768260843326,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 276.2712108159691,
                        "hasRDI": true,
                        "daily": 69.06780270399227,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 276.2712108159691,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.34660450586,
                        "hasRDI": true,
                        "daily": 139.44185441083332,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.1590996812000003,
                        "hasRDI": true,
                        "daily": 14.393997874666669,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 19.68389476856687,
                        "hasRDI": true,
                        "daily": 131.22596512377913,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 353.35044421913705,
                        "hasRDI": true,
                        "daily": 294.45870351594755,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1739.2449441818587,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/01208d9fc02a4cabbbad21c03493d233?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5b4ed53edc64407193e346659169c7ca",
                "label": "Chicken Fritz",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/9f7/9f7ae51c12311b4648923a748f910380.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=04f3dd3ed77f1ad744d3bb2c14f469f1a9ac444e916c7e33d910a410241d710a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9f7/9f7ae51c12311b4648923a748f910380-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af6445ffe732587d1719800199917163a642111280f0d8129c19a2b0c979b44d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9f7/9f7ae51c12311b4648923a748f910380-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=edd2f6889e0b92fcbe8d7e1a551dd4a0e6009b20408b4ae57a873197e351ef31",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9f7/9f7ae51c12311b4648923a748f910380.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=04f3dd3ed77f1ad744d3bb2c14f469f1a9ac444e916c7e33d910a410241d710a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/9f7/9f7ae51c12311b4648923a748f910380-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5bfaca40f8485ea1b9e533c65f4db9d5cf9108a12864d48ea3c9dcfd96eebb9",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/24370-chicken-fritz",
                "shareAs": "http://www.edamam.com/recipe/chicken-fritz-5b4ed53edc64407193e346659169c7ca/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1/4 cup safflower or olive oil",
                    "1 large onion, chopped",
                    "2 cups shredded cooked chicken (preferably leftover from making chicken soup)",
                    "kosher salt",
                    "Freshly ground pepper",
                    "1 teaspoon sweet paprika"
                ],
                "ingredients": [
                    {
                        "text": "1/4 cup safflower or olive oil",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "olive oil",
                        "weight": 54,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 large onion, chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 150,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "2 cups shredded cooked chicken (preferably leftover from making chicken soup)",
                        "quantity": 2,
                        "measure": "cup",
                        "food": "cooked chicken",
                        "weight": 280,
                        "foodCategory": "Poultry",
                        "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
                        "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
                    },
                    {
                        "text": "kosher salt",
                        "quantity": 0,
                        "measure": null,
                        "food": "kosher salt",
                        "weight": 2.9178,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Freshly ground pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 1.4589,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 teaspoon sweet paprika",
                        "quantity": 1,
                        "measure": "teaspoon",
                        "food": "sweet paprika",
                        "weight": 2.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                        "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
                    }
                ],
                "calories": 1015.107839,
                "totalCO2Emissions": 4108.146408684,
                "co2EmissionsClass": "E",
                "totalWeight": 490.11801800714437,
                "totalTime": 0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1015.107839,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 73.05826014,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 12.652498710000001,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 46.489381271,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 10.116769822000002,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 16.185696,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 12.4638943,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.7218016999999994,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 6.60623696,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 72.1260256,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 210.00000000000003,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1134.2735667720003,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 80.93611532171462,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 80.41231018007146,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 932.7720994405715,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 4.640144279423577,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.630310028007145,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 590.627062,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 90.573903,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 11.120700000000001,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.251765612,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.48301602,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.486931459999997,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.381465399,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 43.875013,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 43.875013,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.812,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 8.49047256,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 37.347496,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 322.81468073601434,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 50.755391949999996,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 112.39732329230769,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 63.26249355000001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 5.395232,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.887206799999996,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 144.2520512,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 70.00000000000001,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 47.26139861550001,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 8.093611532171462,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 19.145788138112252,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 19.846214881714285,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 25.778579330130984,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 42.09372752733768,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 84.37529457142857,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 10.063767,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 12.356333333333335,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 20.98046766666667,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 37.155078461538466,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 140.54332162499998,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 106.26656915384616,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 10.968753249999999,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 33.833333333333336,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 56.603150400000004,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 31.122913333333333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 73.05826014,
                        "hasRDI": true,
                        "daily": 112.39732329230769,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 12.652498710000001,
                                "hasRDI": true,
                                "daily": 63.26249355000001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 46.489381271,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.116769822000002,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 16.185696,
                        "hasRDI": true,
                        "daily": 5.395232,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 12.4638943,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 3.7218016999999994,
                                "hasRDI": true,
                                "daily": 14.887206799999996,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 6.60623696,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 72.1260256,
                        "hasRDI": true,
                        "daily": 144.2520512,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 210.00000000000003,
                        "hasRDI": true,
                        "daily": 70.00000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1134.2735667720003,
                        "hasRDI": true,
                        "daily": 47.26139861550001,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 80.93611532171462,
                        "hasRDI": true,
                        "daily": 8.093611532171462,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 80.41231018007146,
                        "hasRDI": true,
                        "daily": 19.145788138112252,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 932.7720994405715,
                        "hasRDI": true,
                        "daily": 19.846214881714285,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 4.640144279423577,
                        "hasRDI": true,
                        "daily": 25.778579330130984,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.630310028007145,
                        "hasRDI": true,
                        "daily": 42.09372752733768,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 590.627062,
                        "hasRDI": true,
                        "daily": 84.37529457142857,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 90.573903,
                        "hasRDI": true,
                        "daily": 10.063767,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 11.120700000000001,
                        "hasRDI": true,
                        "daily": 12.356333333333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.251765612,
                        "hasRDI": true,
                        "daily": 20.98046766666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.48301602,
                        "hasRDI": true,
                        "daily": 37.155078461538466,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 22.486931459999997,
                        "hasRDI": true,
                        "daily": 140.54332162499998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.381465399,
                        "hasRDI": true,
                        "daily": 106.26656915384616,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 43.875013,
                        "hasRDI": true,
                        "daily": 10.968753249999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 43.875013,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.812,
                        "hasRDI": true,
                        "daily": 33.833333333333336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 8.49047256,
                        "hasRDI": true,
                        "daily": 56.603150400000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 37.347496,
                        "hasRDI": true,
                        "daily": 31.122913333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 322.81468073601434,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/5b4ed53edc64407193e346659169c7ca?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c455834e081d4b98aecccf0f2a723ffd",
                "label": "Grilled Butterflied Chicken Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/df9/df93bb1513572ca10cd56f1ce063f62f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dca2023c53341bf2a4e61113d8f4225bd5930727c9a7f79dbb63cc69e1f6b742",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df9/df93bb1513572ca10cd56f1ce063f62f-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df04b7a656416dc59f021d0784b04ef5afd4751e4f091066362931e756fda35f",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df9/df93bb1513572ca10cd56f1ce063f62f-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed91899f990940ca2a8a23b8dc4d6790192e786534b68070527aee32081faa25",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df9/df93bb1513572ca10cd56f1ce063f62f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dca2023c53341bf2a4e61113d8f4225bd5930727c9a7f79dbb63cc69e1f6b742",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/df9/df93bb1513572ca10cd56f1ce063f62f-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23c55662c89bee7ed96de92a7adb352eeee6bd1a693f45723d4f6e7ae7bad76c",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/grilled-butterflied-chicken-recipe",
                "shareAs": "http://www.edamam.com/recipe/grilled-butterflied-chicken-recipe-c455834e081d4b98aecccf0f2a723ffd/chicken",
                "yield": 4,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Keto-Friendly",
                    "Paleo",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 whole chicken, 3 1/2 to 4 pounds (1.6 to 1.8kg)",
                    "Kosher salt and freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 whole chicken, 3 1/2 to 4 pounds (1.6 to 1.8kg)",
                        "quantity": 3.75,
                        "measure": "pound",
                        "food": "chicken",
                        "weight": 1700.9713875,
                        "foodCategory": "Poultry",
                        "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                        "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 10.205828325,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 5.1029141625,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 2499.628483072875,
                "totalCO2Emissions": 16814.7931000151,
                "co2EmissionsClass": "G",
                "totalWeight": 1714.2102777030866,
                "totalTime": 60,
                "cuisineType": [
                    "indian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2499.628483072875,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 174.8220970701975,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 49.922999931708745,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 1.121960727195,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 72.21332845006087,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 37.41106263839175,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 3.265865064,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 1.9748277808875,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.2910372831125,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 0.03265865064,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 215.6695641639,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 867.495407625,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3967.4416670301107,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 151.79120377461578,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 240.13945167828086,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2254.608063659497,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.932286577612686,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 15.221113774424337,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1708.35360332175,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 475.60860965887497,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.506568696,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6995074733954999,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.3971778976925,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 78.7110901794525,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.063161382462875,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 70.267128017625,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 70.267128017625,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.58564768485,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.313321087,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.52305193779,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 25.718687379000002,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 764.0500949323937,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 124.98142415364374,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 268.95707241568846,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 249.61499965854372,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 1.0886216880000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 5.164149132450001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 431.3391283278,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 289.165135875,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 165.31006945958796,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 15.17912037746158,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.1760599234002,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 47.97038433318079,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 60.73492543118159,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 138.3737615856758,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 244.05051476024997,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 52.845401073208336,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 20.562854106666666,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 58.292289449624995,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 107.47522289942307,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 491.9443136215781,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 312.5508755740673,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 17.56678200440625,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 149.40198686875001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 15.422140579999999,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 23.487012918599998,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 21.4322394825,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 174.8220970701975,
                        "hasRDI": true,
                        "daily": 268.95707241568846,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 49.922999931708745,
                                "hasRDI": true,
                                "daily": 249.61499965854372,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 1.121960727195,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 72.21332845006087,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 37.41106263839175,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 3.265865064,
                        "hasRDI": true,
                        "daily": 1.0886216880000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 1.9748277808875,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.2910372831125,
                                "hasRDI": true,
                                "daily": 5.164149132450001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 0.03265865064,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 215.6695641639,
                        "hasRDI": true,
                        "daily": 431.3391283278,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 867.495407625,
                        "hasRDI": true,
                        "daily": 289.165135875,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3967.4416670301107,
                        "hasRDI": true,
                        "daily": 165.31006945958796,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 151.79120377461578,
                        "hasRDI": true,
                        "daily": 15.17912037746158,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 240.13945167828086,
                        "hasRDI": true,
                        "daily": 57.1760599234002,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2254.608063659497,
                        "hasRDI": true,
                        "daily": 47.97038433318079,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.932286577612686,
                        "hasRDI": true,
                        "daily": 60.73492543118159,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 15.221113774424337,
                        "hasRDI": true,
                        "daily": 138.3737615856758,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1708.35360332175,
                        "hasRDI": true,
                        "daily": 244.05051476024997,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 475.60860965887497,
                        "hasRDI": true,
                        "daily": 52.845401073208336,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 18.506568696,
                        "hasRDI": true,
                        "daily": 20.562854106666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6995074733954999,
                        "hasRDI": true,
                        "daily": 58.292289449624995,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.3971778976925,
                        "hasRDI": true,
                        "daily": 107.47522289942307,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 78.7110901794525,
                        "hasRDI": true,
                        "daily": 491.9443136215781,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.063161382462875,
                        "hasRDI": true,
                        "daily": 312.5508755740673,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 70.267128017625,
                        "hasRDI": true,
                        "daily": 17.56678200440625,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 70.267128017625,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.58564768485,
                        "hasRDI": true,
                        "daily": 149.40198686875001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.313321087,
                        "hasRDI": true,
                        "daily": 15.422140579999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.52305193779,
                        "hasRDI": true,
                        "daily": 23.487012918599998,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 25.718687379000002,
                        "hasRDI": true,
                        "daily": 21.4322394825,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 764.0500949323937,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/c455834e081d4b98aecccf0f2a723ffd?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ff8531cd494f9ac93c169ade504b60ae",
                "label": "Fig & Balsamic Chicken",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03cba4ef9a200b794f178dca22ba41618ccef86e551a6b410d9508c75c0f3c57",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=edfcc9368ee7584a69fb98bd27dcff367a5f5962527c2adc818dc2e9d77498ca",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4cb43c411969448a4fd1f2e55c391a995c874c40dc555a895365bcb76825b445",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03cba4ef9a200b794f178dca22ba41618ccef86e551a6b410d9508c75c0f3c57",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/81877-fig-balsamic-chicken",
                "shareAs": "http://www.edamam.com/recipe/fig-balsamic-chicken-ff8531cd494f9ac93c169ade504b60ae/chicken",
                "yield": 3,
                "dietLabels": [
                    "Low-Fat",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 Shallots",
                    "2 teaspoons Fresh Rosemary",
                    "2 Chicken Breasts",
                    "3.5 tablespoons Balsamic Vinegar",
                    "4 tablespoons Fig Jam",
                    "1/3 cup Chicken Stock"
                ],
                "ingredients": [
                    {
                        "text": "2 Shallots",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "Shallots",
                        "weight": 118.22222222222223,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "2 teaspoons Fresh Rosemary",
                        "quantity": 2,
                        "measure": "teaspoon",
                        "food": "Fresh Rosemary",
                        "weight": 1.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
                        "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
                    },
                    {
                        "text": "2 Chicken Breasts",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "Chicken Breasts",
                        "weight": 544,
                        "foodCategory": "Poultry",
                        "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                        "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
                    },
                    {
                        "text": "3.5 tablespoons Balsamic Vinegar",
                        "quantity": 3.5,
                        "measure": "tablespoon",
                        "food": "Balsamic Vinegar",
                        "weight": 56,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
                        "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
                    },
                    {
                        "text": "4 tablespoons Fig Jam",
                        "quantity": 4,
                        "measure": "tablespoon",
                        "food": "Jam",
                        "weight": 80,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_bzsx4atbph30cebveok2ebmgwrq8",
                        "image": "https://www.edamam.com/food-img/42b/42ba8bb2c0e13f6e69b3af18f0f641ae.jpg"
                    },
                    {
                        "text": "1/3 cup Chicken Stock",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "Chicken Stock",
                        "weight": 80,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    }
                ],
                "calories": 1040.2340000000002,
                "totalCO2Emissions": 6575.985636359112,
                "co2EmissionsClass": "F",
                "totalWeight": 879.6222222222223,
                "totalTime": 30,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1040.2340000000002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 15.469062222222224,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 3.387377777777778,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.03808,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 4.276951111111111,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.535680666666667,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 87.61513333333333,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 82.75462222222222,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.860511111111111,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 57.7680888888889,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 38.800000000000004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 127.98829555555557,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 399.52,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 412.2306666666667,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 108.90022222222225,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 191.54066666666668,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2429.494222222222,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 4.487766666666667,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.38990888888889,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1278.0173333333335,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 51.80399999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 16.962977777777777,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.6235973333333334,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.1174524444444447,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 53.766012444444456,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 4.889210666666667,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 103.48155555555556,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 103.48155555555556,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.1424,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.213688888888889,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 1.105777777777778,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 638.2505333333334,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 52.011700000000005,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 23.798557264957267,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 16.93688888888889,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 29.205044444444443,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 19.442044444444445,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 255.97659111111113,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 133.17333333333335,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 17.17627777777778,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 10.890022222222225,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 45.60492063492064,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 51.69136643026004,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 24.93203703703704,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 39.90826262626263,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 182.5739047619048,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5.7559999999999985,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.84775308641975,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 51.966444444444456,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 85.95788034188035,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 336.03757777777787,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 376.0931282051282,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 25.870388888888886,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 47.60000000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 21.424592592592596,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.9214814814814817,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 15.469062222222224,
                        "hasRDI": true,
                        "daily": 23.798557264957267,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 3.387377777777778,
                                "hasRDI": true,
                                "daily": 16.93688888888889,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.03808,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 4.276951111111111,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.535680666666667,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 87.61513333333333,
                        "hasRDI": true,
                        "daily": 29.205044444444443,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 82.75462222222222,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 4.860511111111111,
                                "hasRDI": true,
                                "daily": 19.442044444444445,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 57.7680888888889,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 38.800000000000004,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 127.98829555555557,
                        "hasRDI": true,
                        "daily": 255.97659111111113,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 399.52,
                        "hasRDI": true,
                        "daily": 133.17333333333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 412.2306666666667,
                        "hasRDI": true,
                        "daily": 17.17627777777778,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 108.90022222222225,
                        "hasRDI": true,
                        "daily": 10.890022222222225,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 191.54066666666668,
                        "hasRDI": true,
                        "daily": 45.60492063492064,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2429.494222222222,
                        "hasRDI": true,
                        "daily": 51.69136643026004,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 4.487766666666667,
                        "hasRDI": true,
                        "daily": 24.93203703703704,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.38990888888889,
                        "hasRDI": true,
                        "daily": 39.90826262626263,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1278.0173333333335,
                        "hasRDI": true,
                        "daily": 182.5739047619048,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 51.80399999999999,
                        "hasRDI": true,
                        "daily": 5.7559999999999985,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 16.962977777777777,
                        "hasRDI": true,
                        "daily": 18.84775308641975,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.6235973333333334,
                        "hasRDI": true,
                        "daily": 51.966444444444456,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.1174524444444447,
                        "hasRDI": true,
                        "daily": 85.95788034188035,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 53.766012444444456,
                        "hasRDI": true,
                        "daily": 336.03757777777787,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 4.889210666666667,
                        "hasRDI": true,
                        "daily": 376.0931282051282,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 103.48155555555556,
                        "hasRDI": true,
                        "daily": 25.870388888888886,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 103.48155555555556,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.1424,
                        "hasRDI": true,
                        "daily": 47.60000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.213688888888889,
                        "hasRDI": true,
                        "daily": 21.424592592592596,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 1.105777777777778,
                        "hasRDI": true,
                        "daily": 0.9214814814814817,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 638.2505333333334,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/ff8531cd494f9ac93c169ade504b60ae?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_55be36f38e1f37932c39f610372da034",
                "label": "Schmaltz (Rendered Chicken Fat) Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fc3/fc3f30cda28a700d007578691e1c6992.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6364c43a6cf75ffdcefacea4cb9f23acf4e98a69684eb19bc8689c2b662226e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc3/fc3f30cda28a700d007578691e1c6992-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d746de09fbafe9d62ff5fb85a5da1ed1b256bd1debbb6e0f470cc605f682d03",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc3/fc3f30cda28a700d007578691e1c6992-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=389b6ac0ed44287a7d897b0e8e056a26c4744491d5fe7f6c10b6678513a8115f",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc3/fc3f30cda28a700d007578691e1c6992.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e6364c43a6cf75ffdcefacea4cb9f23acf4e98a69684eb19bc8689c2b662226e",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fc3/fc3f30cda28a700d007578691e1c6992-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=275975e50a804cd59305c0329acbcc77f6a00a8a4ef64f6e5d44346932ceac2d",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2015/04/schmaltz-rendered-chicken-fat-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/schmaltz-rendered-chicken-fat-recipe-55be36f38e1f37932c39f610372da034/chicken",
                "yield": 10,
                "dietLabels": [
                    "Low-Carb",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "3/4 pound chicken fat and skin, finely chopped",
                    "1 medium onion, chopped"
                ],
                "ingredients": [
                    {
                        "text": "3/4 pound chicken fat and skin, finely chopped",
                        "quantity": 0.75,
                        "measure": "pound",
                        "food": "chicken fat",
                        "weight": 340.1942775,
                        "foodCategory": "Oils",
                        "foodId": "food_b5h84enb8kpx1jawb5qbfaqktajo",
                        "image": null
                    },
                    {
                        "text": "1 medium onion, chopped",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "onion",
                        "weight": 110,
                        "foodCategory": "vegetables",
                        "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    }
                ],
                "calories": 3105.7484975,
                "totalCO2Emissions": 3412.7175189249997,
                "co2EmissionsClass": "D",
                "totalWeight": 450.1942775,
                "totalTime": 60,
                "cuisineType": [
                    "kosher"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3105.7484974999998,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 339.62388894500003,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 101.42409469500001,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 152.0811420425,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 71.1193039975,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 10.274000000000001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 8.404,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.87,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 4.664000000000001,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 1.2100000000000002,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 289.16513587500003,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4.4,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 25.300000000000004,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 11,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 160.60000000000002,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 0.23100000000000004,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 0.187,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 31.900000000000006,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.14,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.050600000000000006,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.0297,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.12760000000000002,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.132,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 20.900000000000002,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 20.900000000000002,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 16.32932532,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 9.207245492500002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.44000000000000006,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 98.690388555,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 155.287424875,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 522.4982906846154,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 507.12047347500004,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 3.424666666666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 7.48,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 2.4200000000000004,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 96.38837862500002,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 0.18333333333333335,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2.5300000000000002,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 2.619047619047619,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3.417021276595745,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 1.2833333333333337,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 1.7,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4.557142857142858,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 9.044444444444444,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 4.216666666666668,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.2846153846153845,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.7975000000000001,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 10.153846153846155,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 5.225,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 108.86216879999999,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 61.38163661666668,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 0.36666666666666675,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 339.62388894500003,
                        "hasRDI": true,
                        "daily": 522.4982906846154,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 101.42409469500001,
                                "hasRDI": true,
                                "daily": 507.12047347500004,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 152.0811420425,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 71.1193039975,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 10.274000000000001,
                        "hasRDI": true,
                        "daily": 3.424666666666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 8.404,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.87,
                                "hasRDI": true,
                                "daily": 7.48,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 4.664000000000001,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 1.2100000000000002,
                        "hasRDI": true,
                        "daily": 2.4200000000000004,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 289.16513587500003,
                        "hasRDI": true,
                        "daily": 96.38837862500002,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4.4,
                        "hasRDI": true,
                        "daily": 0.18333333333333335,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 25.300000000000004,
                        "hasRDI": true,
                        "daily": 2.5300000000000002,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 11,
                        "hasRDI": true,
                        "daily": 2.619047619047619,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 160.60000000000002,
                        "hasRDI": true,
                        "daily": 3.417021276595745,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 0.23100000000000004,
                        "hasRDI": true,
                        "daily": 1.2833333333333337,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.187,
                        "hasRDI": true,
                        "daily": 1.7,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 31.900000000000006,
                        "hasRDI": true,
                        "daily": 4.557142857142858,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8.14,
                        "hasRDI": true,
                        "daily": 9.044444444444444,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.050600000000000006,
                        "hasRDI": true,
                        "daily": 4.216666666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.0297,
                        "hasRDI": true,
                        "daily": 2.2846153846153845,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.12760000000000002,
                        "hasRDI": true,
                        "daily": 0.7975000000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.132,
                        "hasRDI": true,
                        "daily": 10.153846153846155,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 20.900000000000002,
                        "hasRDI": true,
                        "daily": 5.225,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 20.900000000000002,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 16.32932532,
                        "hasRDI": true,
                        "daily": 108.86216879999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 9.207245492500002,
                        "hasRDI": true,
                        "daily": 61.38163661666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 0.44000000000000006,
                        "hasRDI": true,
                        "daily": 0.36666666666666675,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 98.690388555,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ],
                "tags": [
                    "chicken",
                    "poultry",
                    "fat",
                    "Jewish"
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/55be36f38e1f37932c39f610372da034?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0d6bfaa492fd47daa4c4b1270787d3c5",
                "label": "Drunken Chicken Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ef1/ef183dac9ae67d288829035e66dd7097.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0d8a074a499eb83198cb2e006c640103073cd426c790064bec94f5efcc27ba14",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef1/ef183dac9ae67d288829035e66dd7097-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fbb784a3dcb2d8e67cf5f44f8ac2ffc44006f5559b71af97a8af0ece85888494",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef1/ef183dac9ae67d288829035e66dd7097-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ce9f6209fb46b90cafd6dfee800aff782ea000f45a8255071170c94383f3a006",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ef1/ef183dac9ae67d288829035e66dd7097.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0d8a074a499eb83198cb2e006c640103073cd426c790064bec94f5efcc27ba14",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/drunken-chicken",
                "shareAs": "http://www.edamam.com/recipe/drunken-chicken-recipe-0d6bfaa492fd47daa4c4b1270787d3c5/chicken",
                "yield": 4,
                "dietLabels": [],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Paleo",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "2 whole chicken parts (two breasts, two leg/thighs, or a mix), totaling about 2 pounds",
                    "One 1-inch piece of ginger",
                    "Kosher salt",
                    "1 cup Shaoxing rice wine",
                    "1 cup chicken broth from simmering"
                ],
                "ingredients": [
                    {
                        "text": "2 whole chicken parts (two breasts, two leg/thighs, or a mix), totaling about 2 pounds",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "chicken parts",
                        "weight": 386,
                        "foodCategory": "Poultry",
                        "foodId": "food_bsarl08be0gwarb34bpviafna9d4",
                        "image": "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg"
                    },
                    {
                        "text": "One 1-inch piece of ginger",
                        "quantity": 1,
                        "measure": "<unit>",
                        "food": "piece of ginger",
                        "weight": 60,
                        "foodCategory": "vegetables",
                        "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                        "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                    },
                    {
                        "text": "Kosher salt",
                        "quantity": 0,
                        "measure": null,
                        "food": "Kosher salt",
                        "weight": 5.5127999999999995,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 cup Shaoxing rice wine",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "rice wine",
                        "weight": 232.8,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1 cup chicken broth from simmering",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "chicken broth",
                        "weight": 240,
                        "foodCategory": "canned soup",
                        "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                        "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                    }
                ],
                "calories": 1299.412,
                "totalCO2Emissions": 6640.7780231424,
                "co2EmissionsClass": "F",
                "totalWeight": 922.5843686185567,
                "totalTime": 1440,
                "cuisineType": [
                    "chinese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1299.412,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 67.406,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 18.339399999999998,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.3281,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 28.2776,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 13.9978,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 31.756999999999998,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 30.557,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 1.2,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 4.811999999999999,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 71.994,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 385.47999999999996,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2136.6510240000002,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 56.3682484684536,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 118.88584368618557,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1346.9427494894846,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 3.7340884164412373,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.569744368618557,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 705.1879999999999,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 91.18,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.48,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.38078,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.7841,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.075200000000002,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.58182,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 30.18,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 30.18,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.3931999999999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.386,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 1.0386,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 8.646,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 707.8327687372372,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 64.9706,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 103.70153846153846,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 91.69699999999999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 10.585666666666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 4.8,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 143.988,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 128.4933333333333,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 89.02712600000001,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 5.63682484684536,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 28.30615325861561,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 28.658356372116696,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 20.744935646895765,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 50.634039714714156,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 100.74114285714285,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 10.13111111111111,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.8666666666666667,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.73166666666667,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 60.31538461538461,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 137.97000000000003,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 121.67846153846152,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 7.545,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 99.71666666666665,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.5733333333333333,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.924,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.205000000000001,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 67.406,
                        "hasRDI": true,
                        "daily": 103.70153846153846,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 18.339399999999998,
                                "hasRDI": true,
                                "daily": 91.69699999999999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.3281,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 28.2776,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 13.9978,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 31.756999999999998,
                        "hasRDI": true,
                        "daily": 10.585666666666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 30.557,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 1.2,
                                "hasRDI": true,
                                "daily": 4.8,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 4.811999999999999,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 71.994,
                        "hasRDI": true,
                        "daily": 143.988,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 385.47999999999996,
                        "hasRDI": true,
                        "daily": 128.4933333333333,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2136.6510240000002,
                        "hasRDI": true,
                        "daily": 89.02712600000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 56.3682484684536,
                        "hasRDI": true,
                        "daily": 5.63682484684536,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 118.88584368618557,
                        "hasRDI": true,
                        "daily": 28.30615325861561,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1346.9427494894846,
                        "hasRDI": true,
                        "daily": 28.658356372116696,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.7340884164412373,
                        "hasRDI": true,
                        "daily": 20.744935646895765,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.569744368618557,
                        "hasRDI": true,
                        "daily": 50.634039714714156,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 705.1879999999999,
                        "hasRDI": true,
                        "daily": 100.74114285714285,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 91.18,
                        "hasRDI": true,
                        "daily": 10.13111111111111,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 3.48,
                        "hasRDI": true,
                        "daily": 3.8666666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.38078,
                        "hasRDI": true,
                        "daily": 31.73166666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.7841,
                        "hasRDI": true,
                        "daily": 60.31538461538461,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 22.075200000000002,
                        "hasRDI": true,
                        "daily": 137.97000000000003,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.58182,
                        "hasRDI": true,
                        "daily": 121.67846153846152,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 30.18,
                        "hasRDI": true,
                        "daily": 7.545,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 30.18,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.3931999999999998,
                        "hasRDI": true,
                        "daily": 99.71666666666665,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.386,
                        "hasRDI": true,
                        "daily": 2.5733333333333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 1.0386,
                        "hasRDI": true,
                        "daily": 6.924,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 8.646,
                        "hasRDI": true,
                        "daily": 7.205000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 707.8327687372372,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/0d6bfaa492fd47daa4c4b1270787d3c5?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4e3bf73433674686b6ad213b384c6ba6",
                "label": "Chicken Heart Yakitori Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/718/71810602764c8080e69d3cfa2432aa67.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d491e122526fb25bfc160f3d2623308c313cbf4ed42a06ac0a6853393a200a1",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/718/71810602764c8080e69d3cfa2432aa67-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b5db35ba5c1df4e3cb9b12465a0db0fbf50184aa8244effae5f2655fdb0e05b3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/718/71810602764c8080e69d3cfa2432aa67-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b2c4fa819f7d24b603c7bbe5fb1296b261a674baf197bb6699a9222c419bbe4",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/718/71810602764c8080e69d3cfa2432aa67.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCIGZXeAIaUVN51MlsCjzlhSM9g36zPJfsmV10XaCeLExWAiAFb%2BFXJGnDpE2V0UBQrDm24gEv17F3gos3Fi0%2BM1hTayrCBQi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMcPnqTfehbjBnWNPgKpYFix3TNK%2BNSqZ3WCnnvrrkA4hBvMj2tdX7%2BbZdRk%2FWG%2FY6JpJfDausZAIq0sA9%2BbTmiBV4eNPGW%2BoXbK3LDRBBpe1LVK%2Bb3DINkqHRv%2FQcl5UHojypDlySejlbaPu8wGE7ayWqbY9J8EZwfrt4pSuaWgf3ClJMKxwbriLUZHmSGmVKuIONgWTGkJsVxTkCJ%2BVVdCPU6ZoPaP%2B1IA9PZQIOxFQT8rYweusYSFt2TnmwLdRgEALAWjGuZha%2B7%2FvHWHL%2BvUEmhqNYkkOtnM2sp2G2k85G7ULkWwHcdB6O5mgkQUG8K1EgeHHQwRa%2B%2BJ2jnvI5iYaMxx%2F5ZceDYzvBWeYqVCRZJxKA9zqU48jlacZa%2FPoOMQ5so2nUzuF5x%2FQNe06p1aOU7Wg5R9y8pOU7CRCAGyeY7SgFB1FMWytEz7fsgGwlH7bnx3BJf19yex7HPZg%2BSE%2Fha3jyU3vINS4CgDP0LAXih9XiHfu38uxHwmOXKMVIsg9OtImGEiDjFSksJbg7kaBShshRxHy6lU6HPx%2FaGhyuBCWhv%2FCVqpuQ%2FRyj2K4PMQEiJyCHV2CRsj3s2hoHxvwHPtrYBTjOtJApKJ89B7kfksUefRHJJVNWsoMVEu0PTMg34HAEQ8xh8G6ElMPRyCsPyBe4k0cX0072Bz4yJtw6w%2BRYIM69pr8beKW7vosw7Fvu8q6nx6ZBYFLQQnJBhaZAxgw%2BYaBWvwo57G%2FKWHM6wZR5uZeilfj1mTSdCj2Qj0K34kXl7IJ12oJPZmU8mSfoDxlhHyB59btZwKYFQsX8duZWzqohnUfz%2F6sxHvOwHxugkHwyRlBTIJRtWSODHMkxmDczAbki75PNtimkfylCA8wU7R%2BruGB42GuOyqFrU3UIj%2BowneqetAY6sgFYiat2Jkgl%2BizGVU%2BpUPbxi1H1UJBnpar4%2B1oy0SlIYw6%2FUqJTxRedQxL%2BmTId0nk%2BFogqu%2B4bE9X0Dk9EWlrzMkbrsE%2FhEm4RlW1XVeRqJ6MJxZb%2Br3QDWWcFE9kUs3ZSTSJe4D8VFGHdjucyCIh8cDGyjB10wJPVq%2Bryyat5jXf%2FQvI543MiHQW6kVnfSkbIkL5u3iPYpfYbHgOS%2BT%2FsauRMAo%2Fz%2F5%2FR%2FdUJHGwU2BUW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240705T094430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFEBQNKXQY%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d491e122526fb25bfc160f3d2623308c313cbf4ed42a06ac0a6853393a200a1",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/chicken-heart-yakitori-recipe",
                "shareAs": "http://www.edamam.com/recipe/chicken-heart-yakitori-recipe-4e3bf73433674686b6ad213b384c6ba6/chicken",
                "yield": 6,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "1 pound chicken hearts",
                    "For the sauce:",
                    "2 chicken carcasses cut into 6 to 8 pieces",
                    "1 cup sake",
                    "1 cup mirin",
                    "1 to 1/2 cups soy sauce, depending on darkness",
                    "3 tablespoons sugar",
                    "Freshly ground black pepper"
                ],
                "ingredients": [
                    {
                        "text": "1 pound chicken hearts",
                        "quantity": 1,
                        "measure": "pound",
                        "food": "chicken hearts",
                        "weight": 453.59237,
                        "foodCategory": "Poultry",
                        "foodId": "food_a3ssteza84mhb2alnunwga2n6yt8",
                        "image": "https://www.edamam.com/food-img/5aa/5aa4ff691b0918bf29d61b181cd662eb.jpg"
                    },
                    {
                        "text": "2 chicken carcasses cut into 6 to 8 pieces",
                        "quantity": 2,
                        "measure": "<unit>",
                        "food": "chicken carcasses",
                        "weight": 1000,
                        "foodCategory": "Poultry",
                        "foodId": "food_a6bp4f1bgu015waerzbg6bnbmjjk",
                        "image": null
                    },
                    {
                        "text": "1 cup sake",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "sake",
                        "weight": 232.8,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_b4lx3glaxob844b6jpzb8ay9men8",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1 cup mirin",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "mirin",
                        "weight": 232.8,
                        "foodCategory": "cocktails and liquors",
                        "foodId": "food_bm83c4ob7z5q3xac1potzakndqbv",
                        "image": "https://www.edamam.com/food-img/bb7/bb76cdd34c080bf65908c09812fd9c8d.jpg"
                    },
                    {
                        "text": "1 to 1/2 cups soy sauce, depending on darkness",
                        "quantity": 1,
                        "measure": "cup",
                        "food": "soy sauce",
                        "weight": 255,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                    },
                    {
                        "text": "3 tablespoons sugar",
                        "quantity": 3,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 37.4999999993661,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "Freshly ground black pepper",
                        "quantity": 0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 6.635077109998098,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 4804.829369643643,
                "totalCO2Emissions": 16125.957041099664,
                "co2EmissionsClass": "G",
                "totalWeight": 2218.327447109364,
                "totalTime": 30,
                "cuisineType": [
                    "japanese"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "main course"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4804.829369643643,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 330.98997163478595,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 95.74393461382897,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 133.0235723888429,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 74.42922129655777,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 80.81845517676489,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 77.09978066793536,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 3.718674508829519,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 38.48746449287136,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 37.42499999936737,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 234.5354577394398,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1406.8856232,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 14986.172369221997,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 321.62947599728517,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 446.0208373580968,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3552.969096762962,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 41.26022123938049,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 44.88606460060892,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2394.5779167337973,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 792.6147841196994,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 30.514955840000002,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.290776285678798,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.901970592397876,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 76.22094753505398,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 3.9296406063900955,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 423.4144695086997,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 423.4144695086997,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 35.566883773,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 3.7690048019439804,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 34.88152646039688,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1462.27126895875,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 240.24146848218217,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 509.21534097659384,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 478.71967306914485,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 26.939485058921626,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 14.874698035318076,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 469.0709154788796,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 468.9618744,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 624.4238487175832,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 32.16294759972852,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 106.19543746621353,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 75.59508716516942,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 229.22345132989162,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 408.0551327328083,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 342.08255953339966,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 88.06830934663326,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 33.90550648888889,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 107.56469047323317,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 377.0746609536828,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 476.3809220940874,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 302.28004664539196,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 105.85361737717493,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1481.9534905416667,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 25.126698679626536,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 29.067938716997396,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 330.98997163478595,
                        "hasRDI": true,
                        "daily": 509.21534097659384,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 95.74393461382897,
                                "hasRDI": true,
                                "daily": 478.71967306914485,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 133.0235723888429,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 74.42922129655777,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 80.81845517676489,
                        "hasRDI": true,
                        "daily": 26.939485058921626,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 77.09978066793536,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 3.718674508829519,
                                "hasRDI": true,
                                "daily": 14.874698035318076,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 38.48746449287136,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 37.42499999936737,
                                "hasRDI": false,
                                "daily": 0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 234.5354577394398,
                        "hasRDI": true,
                        "daily": 469.0709154788796,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1406.8856232,
                        "hasRDI": true,
                        "daily": 468.9618744,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 14986.172369221997,
                        "hasRDI": true,
                        "daily": 624.4238487175832,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 321.62947599728517,
                        "hasRDI": true,
                        "daily": 32.16294759972852,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 446.0208373580968,
                        "hasRDI": true,
                        "daily": 106.19543746621353,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3552.969096762962,
                        "hasRDI": true,
                        "daily": 75.59508716516942,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 41.26022123938049,
                        "hasRDI": true,
                        "daily": 229.22345132989162,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 44.88606460060892,
                        "hasRDI": true,
                        "daily": 408.0551327328083,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2394.5779167337973,
                        "hasRDI": true,
                        "daily": 342.08255953339966,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 792.6147841196994,
                        "hasRDI": true,
                        "daily": 88.06830934663326,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 30.514955840000002,
                        "hasRDI": true,
                        "daily": 33.90550648888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.290776285678798,
                        "hasRDI": true,
                        "daily": 107.56469047323317,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.901970592397876,
                        "hasRDI": true,
                        "daily": 377.0746609536828,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 76.22094753505398,
                        "hasRDI": true,
                        "daily": 476.3809220940874,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 3.9296406063900955,
                        "hasRDI": true,
                        "daily": 302.28004664539196,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 423.4144695086997,
                        "hasRDI": true,
                        "daily": 105.85361737717493,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 423.4144695086997,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 35.566883773,
                        "hasRDI": true,
                        "daily": 1481.9534905416667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": true,
                        "daily": 0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 3.7690048019439804,
                        "hasRDI": true,
                        "daily": 25.126698679626536,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 34.88152646039688,
                        "hasRDI": true,
                        "daily": 29.067938716997396,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1462.27126895875,
                        "hasRDI": false,
                        "daily": 0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/4e3bf73433674686b6ad213b384c6ba6?type=public&app_id=35faafbb&app_key=567236b23820e6ee287d06d72d3fb10f",
                    "title": "Self"
                }
            }
        }
    ]
  }

  loadNext(nextUrl: string) {
    this.recipeService.fetchNextRecipes(nextUrl).subscribe((res) => {
        this.recipes = {...res};
        this.nextResults.emit(this.recipes);
      });
  }
}
