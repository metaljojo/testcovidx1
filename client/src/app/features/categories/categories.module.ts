import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories.routing';
import { CategoriesComponent } from './containers/categories/categories.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CategoryItemComponent } from './containers/category-item/category-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent, CategoryItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }
