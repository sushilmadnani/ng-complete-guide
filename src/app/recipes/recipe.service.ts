import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test',
            'https://as2.ftcdn.net/jpg/02/20/57/65/500_F_220576551_gqMi83WWFqh8eaKZfT1Kiv0Xm9sCQ6Zx.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe',
            'Test Recipe',
            'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}