import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './containers/profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileRoutingModule,
    FormsModule
  ],
  declarations: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
