import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loading: LoadingController) { }

  ngOnInit() {
    this.displayLoader()
    .then((loader: any) => {
      loader.dismiss();
    });
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

}
