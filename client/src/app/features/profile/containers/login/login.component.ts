import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TokenPayload, AuthenticationService, UserDetails } from '../../../../shared/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: '',
  };

  constructor(
    private _modalCtrl: ModalController,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this._modalCtrl.dismiss('toto');
    }, (err) => {
      console.error(err);
    });
  }

  dismiss() {
    console.log('dismiss login');
    this._modalCtrl.dismiss('toto');
  }

}
