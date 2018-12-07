import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  onSelectedList(recipe) {
    console.log("Elemento lista selezionato", recipe);
    this.selectedRecipe.emit(recipe);
  }

  constructor(private recipesService: RecipesService) {
  recipesService.newRecipes.subscribe(
    (ricetteAggiornate) => {
      console.log(ricetteAggiornate);
      this.recipes = ricetteAggiornate;
    },
    (error) => {
      console.error(error);

    }
  );
   }

  ngOnInit() {
  }

}
