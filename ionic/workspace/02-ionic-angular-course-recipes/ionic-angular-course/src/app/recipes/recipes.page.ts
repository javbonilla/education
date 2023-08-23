import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {
    this.recipes = [];
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter()');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter()');
    this.recipes = this.recipesService.getRecipes();
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave()');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave()');
  }

  ngOnInit() {
    console.log('ngOnInit()');
    // console.log(this.recipes);
  }

}
