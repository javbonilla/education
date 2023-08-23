import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Gazpacho',
      imageUrl:
        'https://www.recetasderechupete.com/wp-content/uploads/2020/05/Gazpacho-andaluz-Ajustes-de-rechupete-2.jpg',
      ingredients: [
        'Tomate',
        'Cebolla',
        'Ajo',
        'Pepino',
        'Pimiento',
        'AOVE',
        'Vinagre',
        'Sal',
      ],
    },
    {
      id: '2',
      title: 'Tortilla de patatas',
      imageUrl:
        'https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg',
      ingredients: ['Huevos', 'Patatas', 'AOVE', 'Cebolla', 'Sal'],
    },
  ];

  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })!
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
