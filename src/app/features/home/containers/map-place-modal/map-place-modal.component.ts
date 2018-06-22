import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-place-modal',
  templateUrl: './map-place-modal.component.html',
  styleUrls: ['./map-place-modal.component.css']
})
export class MapPlaceModalComponent implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    console.log('dismissing modal');
    this._modalCtrl.dismiss('toto');
  }

}
