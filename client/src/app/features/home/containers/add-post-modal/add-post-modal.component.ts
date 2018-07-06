import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})
export class AddPostModalComponent implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this._modalCtrl.dismiss('dismissing modal addpost');
  }

}
