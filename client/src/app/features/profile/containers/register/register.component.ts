import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../../../shared/services/authentication/authentication.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private _modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  dismiss() {
    console.log('dismissing modal');
    this._modalCtrl.dismiss('toto');
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this._modalCtrl.dismiss('toto');
      console.log(this.credentials);
    }, (err) => {
      console.log(err);
    });
  }

}
