import { RecipesService } from 'src/app/recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: RecipesService) {}

  searchTerm = new FormControl('cake');
  submitSearch() {
    this.service.searchRecipes(this.searchTerm.value);
  }

  ngOnInit() {
  }

}
