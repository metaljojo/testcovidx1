import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public items: any[];
  constructor(
    private router: Router,
    public loading: LoadingController,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.displayLoader()
    .then((loader: any) => {
      loader.dismiss();
    })
    const urlParams = this._route.snapshot.params
    
    const dataBase = {
      categories: {
        bike: [
          {
            title: 'Vélo Homme',
            subtitle: '',
            image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=51a9aa4dd828bf5d50fcd8154dc405b8&auto=format&fit=crop&w=1500&q=80'
          },
          {
            title: 'Vélo Femme'
          }
        ],
        ski: [
          {}
        ]
      }
    };
    console.log(':::::', dataBase.categories[urlParams.type]);
    this.items = dataBase.categories[urlParams.type];
  }

  async displayLoader() {
    const loading = await this.loading.create({
      content: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    return loading;
  }

  goBack() {
    this.router.navigate(['/tabs/(one:one)']);
  }

}
