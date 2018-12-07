import { RecipesService } from './../../recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRicetta: Recipe = null;

  constructor(private service: RecipesService) { }

  ngOnInit() {
    this.service.recipeChanged.subscribe(
      newRecipe => {
        console.log("new detail");
        this.currentRicetta = newRecipe;
      },
      error => {
        console.log(error);
      }

    );
    }
  }
