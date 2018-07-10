import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService, AddPost } from '../../../../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})
export class AddPostModalComponent implements OnInit {
  creds: AddPost = {
    category: '',
    author: '',
    title: '',
    description: '',
    price: <any>[],
    type: '',
    size: '',
    disc: ''
  };

  constructor(
    private _modalCtrl: ModalController,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this._modalCtrl.dismiss('dismissing modal addpost');
  }

  addPost() {
    this.auth.addPost(this.creds).subscribe(() => {
      this._modalCtrl.dismiss('toto');
      console.log(this.creds);
    }, (err) => {
      console.log(err);
    });
  }

}
