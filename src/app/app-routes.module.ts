import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipesEditComponent} from "./recipes/recipes-edit/recipes-edit.component";

const router: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    {path: 'new', component: RecipesEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/eddit', component: RecipesEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
