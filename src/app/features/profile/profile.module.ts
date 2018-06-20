import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './containers/profile/profile.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
