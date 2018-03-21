import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShopingListService} from "../../shoping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedId: number;
  editedItem: Ingredient;


  constructor(private ingredientService: ShopingListService) { }

  ngOnInit() {
    this.subscription = this.ingredientService.startEddit
      .subscribe(
        (id: number) => {
          this.editMode = true;
          this.editedId = id;
          this.editedItem = this.ingredientService.getIngredient(id);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  addEl(form: NgForm){
    if(this.editMode){
      this.ingredientService.updateIngredient(this.editedId, new Ingredient(form.value.name, form.value.amount));
    } else {
      this.ingredientService.addIngredients(new Ingredient(form.value.name, form.value.amount));
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.ingredientService.deleteIngredient(this.editedId);
    this.editMode = false;
    this.slForm.reset();
  }
}
