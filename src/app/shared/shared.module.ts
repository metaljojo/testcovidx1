import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardsComponent, MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CardsComponent, MapComponent]
})
export class SharedModule { }
