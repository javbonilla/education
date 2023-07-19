import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipe: Recipe = new Recipe();

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        // redirect to recipes
        return;
      }
      const recipeId = params.get('recipeId');
      if (recipeId !== null)
        this.recipe = this.recipesService.getRecipe(recipeId)!;
    });
  }

  onDeleteRecipe() {
    // Show an alert
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          // Delete the recipe
          this.recipesService.deleteRecipe(this.recipe.id);
          // redirect to recipes list
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alert => {
      alert.present();
    });
  }
}
