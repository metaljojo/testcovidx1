import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CategoryItemComponent } from './containers/category-item/category-item.component';

const routes: Routes = [
  {
    path: ':type',
    component: CategoriesComponent,
    children: [
      {
        path: ':cat',
        component: CategoryItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
