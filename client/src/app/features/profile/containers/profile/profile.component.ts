import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../../../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  credentials: TokenPayload = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      console.log(this.credentials)
    }, (err) => {
      console.log(err);
    })
  }

}
