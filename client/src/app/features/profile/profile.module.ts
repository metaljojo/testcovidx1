import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './containers/profile/profile.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileRoutingModule,
    FormsModule
  ],
  entryComponents: [RegisterComponent, LoginComponent],
  declarations: [ProfileComponent, LoginComponent, RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
