import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path:'',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
