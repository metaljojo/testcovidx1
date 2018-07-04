import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { UserDetails, AuthenticationService } from '../../../../shared/services/authentication/authentication.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;

  constructor(
    private auth: AuthenticationService,
    public loading: LoadingController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

  async goRegister() {
    const modal = await this.modalController.create({
      component: RegisterComponent,
      componentProps: { value: 123}
    });
    console.log(':::opening modal...');
    return await modal.present();
  }

  async goLogin() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: { value: 123}
    });
    console.log(':::opening modal...');
    return await modal.present();
  }

}
