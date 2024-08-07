import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }
  data: any;
  url: 'https://api.edamam.com/api/recipes/v2?';
  type = 'public';
  appId ='35faafbb';
  appKey = '567236b23820e6ee287d06d72d3fb10f'; 

  getRecipes(searchTerm: string, filters:any) {
    const url = 'https://api.edamam.com/api/recipes/v2?';
    let ingredientsRange: any = "";

    // set ingredients range param value
    if (filters.ingredientsMin.value && filters.ingredientsMax.value) {
      ingredientsRange = `${filters.ingredientsMin.value}-${filters.ingredientsMax.value}`
    } else if (filters.ingredientsMin.value !== "" && filters.ingredientsMax.value === "") {
      ingredientsRange = `${filters.ingredientsMin.value}+`
    } else if (filters.ingredientsMin.value === "" && filters.ingredientsMax.value !== "") {
      ingredientsRange = `${filters.ingredientsMax.value}`
    } else { ingredientsRange = "1+"}
    
    let params = new HttpParams()
      .set("type",this.type)
      .set("app_id",this.appId)
      .set("app_key",this.appKey)
      .set("q",searchTerm)
      .set("ingr", ingredientsRange)
    return this.http.get(url, {params: params})
  }

  fetchNextRecipes(nextUrl: string) {
    return this.http.get(nextUrl);
  }

  getRecipe(recipeUrl:string) {
    return this.http.get(recipeUrl);
  }
}
