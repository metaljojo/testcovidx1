import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './containers/home/home.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { MapPlaceModalComponent } from './containers/map-place-modal/map-place-modal.component';
import { AddPostModalComponent } from './containers/add-post-modal/add-post-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [MapPlaceModalComponent, AddPostModalComponent],
  declarations: [HomeComponent, MapPlaceModalComponent, AddPostModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
