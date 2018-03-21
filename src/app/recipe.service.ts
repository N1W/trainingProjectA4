import {Injectable} from '@angular/core';
import {Recipe} from "./recipes/recipes.model";
import {Ingredient} from "./shared/ingredient.model";
import {ShopingListService} from "./shoping-list.service";

@Injectable()
export class RecipeService {

  newIngredients: Ingredient[];

  recipes: Recipe[] = [
    new Recipe('New recipe',
      'some description',
      'https://cs8.pikabu.ru/post_img/big/2016/01/15/8/1452861704147338573.jpg',
      [new Ingredient('Weider', 1),
      new Ingredient('Palptine', 2),
      new Ingredient('Bane', 3)]),
    new Recipe('New recipe1','some description1', 'https://cs8.pikabu.ru/post_img/big/2016/01/15/8/1452861704147338573.jpg',
    [
      new Ingredient('Chubaka', 1),
      new Ingredient('Solo', 2),
      new Ingredient('Luke', 3)
    ]),
  ];

  constructor(private shoppingService: ShopingListService) { }

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeById(index: number){
    return this.recipes.slice()[index];
  }

  newIngredientsToList(){
    this.newIngredients.map(
      (item) => {
      this.shoppingService.addIngredients(item);
    })
  }

  toShopping(list: Ingredient[]){
    this.newIngredients = list;
    this.newIngredientsToList();
  }

}
