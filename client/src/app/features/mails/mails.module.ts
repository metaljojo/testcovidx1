import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailsRoutingModule } from './mails.routing';
import { MailsComponent } from './containers/mails/mails.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MailsRoutingModule
  ],
  declarations: [MailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MailsModule { }
