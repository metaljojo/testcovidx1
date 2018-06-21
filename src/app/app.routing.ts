import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: './features/categories/categories.module#CategoriesModule'
  },
  { 
    path: '', 
    loadChildren: './features/index-page/index-page.module#IndexPageModule' 
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
