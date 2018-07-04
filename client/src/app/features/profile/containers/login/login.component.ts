import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TokenPayload, AuthenticationService } from '../../../../shared/services/authentication/authentication.service';
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
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

  dismiss() {
    console.log('dismissing modal');
    this._modalCtrl.dismiss('toto');
  }

}
