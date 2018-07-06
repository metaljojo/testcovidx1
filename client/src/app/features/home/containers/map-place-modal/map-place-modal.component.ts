import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { switchMap, tap } from 'rxjs/operators';
import { of, Observable, from as fromPromise } from 'rxjs';

import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';

const { Toast, Geolocation } = Capacitor.Plugins;

@Component({
  selector: 'app-map-place-modal',
  templateUrl: './map-place-modal.component.html',
  styleUrls: ['./map-place-modal.component.css']
})
export class MapPlaceModalComponent implements OnInit {

  public defaultPos = { latitude: 42, longitude: 2 };
  public coords$: Observable<any>;


  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
    // declancher Capacitor
    // checcher la currentPos
    // si elle exisit
    const POSITION = this.getCurrentPosition();
    this.coords$ = POSITION;
  }

  dismiss() {
    console.log('dismissing modal');
    this._modalCtrl.dismiss('toto');
  }

  private getCurrentPosition(): Observable<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    // handle Capacitor Errors
    .catch(err => {
      console.log('ERR', err);
      return new Error(err.message || 'message perso');
    });
    return fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    )
    || of(this.defaultPos);
  }

}
