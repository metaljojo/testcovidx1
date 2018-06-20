import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailsComponent } from './containers/mails/mails.component';

const routes: Routes = [
  {
    path: '',
    component: MailsComponent,
    outlet: 'two'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailsRoutingModule { }
