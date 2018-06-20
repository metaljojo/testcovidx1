import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites.routing';
import { FavoritesComponent } from './containers/favorites/favorites.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FavoritesRoutingModule
  ],
  declarations: [FavoritesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FavoritesModule { }
