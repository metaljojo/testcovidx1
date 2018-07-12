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
    });
    const urlParams = this._route.snapshot.params;
    const dataBase = {
      categories: {
        bike: [
          {
            title: 'Vélo Homme',
            subtitle: 'equipment été',
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=bicycle-bike-forest-100582.jpg&fm=jpg'
          },
          {
            title: 'Vélo Femme',
            subtitle: 'equipment été',
            image: 'https://images.pexels.com/photos/534150/pexels-photo-534150.jpeg?cs=srgb&dl=bike-city-color-534150.jpg&fm=jpg'
          }
        ],
        ski: [
          {
            title: 'Skis Homme',
            subtitle: 'equipment d\'hiver',
            image: 'https://images.pexels.com/photos/298007/pexels-photo-298007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          },
          {
            title: 'Skis Femme',
            subtitle: 'equipment d\'hiver',
            image: 'https://images.pexels.com/photos/848712/pexels-photo-848712.jpeg?cs=srgb&dl=cold-daylight-enjoyment-848712.jpg&fm=jpg'
          }
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

  goItem(cat) {
    console.log('......', cat);
    this.router.navigate(['cat/' + cat]);
  }

  goBack() {
    this.router.navigate(['/tabs/(one:one)']);
  }

}
