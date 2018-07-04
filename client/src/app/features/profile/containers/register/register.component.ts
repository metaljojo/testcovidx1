import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../../../shared/services/authentication/authentication.service';
import { ModalController } from '@ionic/angular';

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
  }

  constructor(private auth: AuthenticationService, private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    console.log('dismissing modal');
    this._modalCtrl.dismiss('toto');
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      console.log(this.credentials)
    }, (err) => {
      console.log(err);
    })
  }

}
