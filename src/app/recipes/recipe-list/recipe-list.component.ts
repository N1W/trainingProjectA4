import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {RecipeService} from "../../recipe.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private getRecepiList: RecipeService,
              private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.getRecepiList.getRecipe();
  }

  edditRecipe(){
    this.route.navigate(['new'], {relativeTo: this.router});
  }

}
