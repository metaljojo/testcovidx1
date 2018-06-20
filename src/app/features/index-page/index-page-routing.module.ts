import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './containers/index-page/index-page.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: IndexPageComponent,
    children: [
      {
        path: 'one',
        outlet: 'one',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'two',
        outlet: 'two',
        loadChildren: '../mails/mails.module#MailsModule'
      },
      {
        path: 'three',
        outlet: 'three',
        loadChildren: '../favorites/favorites.module#FavoritesModule'
      },
      {
        path: 'four',
        outlet: 'four',
        loadChildren: '../profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(one:one)'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule { }
