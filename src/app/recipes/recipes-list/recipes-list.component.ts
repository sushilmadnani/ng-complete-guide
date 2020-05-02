import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://as2.ftcdn.net/jpg/02/20/57/65/500_F_220576551_gqMi83WWFqh8eaKZfT1Kiv0Xm9sCQ6Zx.jpg'),
    new Recipe('A Test Recipe', 'Test Recipe', 
    'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
