import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public loading: LoadingController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async goRegister() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
      componentProps: { value: 123}
    });
    console.log(':::opening modal...')
    return await modal.present();
  }

}
