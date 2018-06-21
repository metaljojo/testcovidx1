import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CardsComponent]
})
export class SharedModule { }
