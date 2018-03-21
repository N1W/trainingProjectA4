import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../recipes.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}