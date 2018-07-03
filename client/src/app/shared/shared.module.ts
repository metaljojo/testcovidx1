import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication/authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardsComponent, MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CardsComponent, MapComponent, HttpClientModule],
  providers: [AuthenticationService]
})
export class SharedModule { }
