import {Component, OnInit, OnDestroy} from '@angular/core';

import {Ingredient} from "../shared/ingredient.model";

import {ShopingListService} from "../shoping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private ingredientService: ShopingListService,) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.subscription = this.ingredientService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  onEddit(id: number){
    this.ingredientService.startEddit.next(id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
