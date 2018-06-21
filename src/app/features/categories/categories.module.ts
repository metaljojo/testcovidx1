import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories.routing';
import { CategoriesComponent } from './containers/categories/categories.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }
