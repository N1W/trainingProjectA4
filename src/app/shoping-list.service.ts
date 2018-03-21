import {Injectable} from '@angular/core';

import {Ingredient} from "./shared/ingredient.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ShopingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEddit = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient("Potatos", 6),
    new Ingredient("Cola", 12)
  ];


  getIngredients(){
    return this.ingredients.slice();
  };

  getIngredient(id: number){
    return this.ingredients[id];
  }


  addIngredients(item: Ingredient){
    this.ingredients.push(item);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: number, element: Ingredient ){
    this.ingredients[id] = element;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id: number){
    this.ingredients.splice(id, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  constructor() { }

}
