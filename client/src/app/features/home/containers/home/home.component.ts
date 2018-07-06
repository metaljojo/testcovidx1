import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MapPlaceModalComponent } from '../map-place-modal/map-place-modal.component';
import { AddPostModalComponent } from '../add-post-modal/add-post-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    public loading: LoadingController,
    private router: Router,
    private _modalController: ModalController
  ) { }

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

  goCategory(type) {
    console.log('......', type);
    this.router.navigate(['categories/' + type]);
  }

  async goMap() {
    const modal = await this._modalController.create({
      component: MapPlaceModalComponent,
      componentProps: { value: 123}
    });
    return await modal.present();
  }

  async goAddPost() {
    const modal = await this._modalController.create({
      component: AddPostModalComponent,
      componentProps: { value: 123}
    });
    return await modal.present();
  }

}
