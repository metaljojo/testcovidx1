import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of, Observable } from 'rxjs';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { AuthenticationService, AddPost } from '../../../../shared/services/authentication/authentication.service';

// import custom plugin
import { MotionPWA, IMotionPWADatasOptions } from '../../../../../plugins/motion/pwa/motion-pwa.plugin';
import { CameraPWA } from '../../../../../plugins/camera/pwa/camera-pwa.plugin';

// Instantiate custom plugin
const motionPWA = new MotionPWA();
const cameraPWA = new CameraPWA('app-add-post-modal');

const { Motion, Toast } = Capacitor.Plugins;

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.css']
})
export class AddPostModalComponent implements OnInit {

  public cameraPlugin = cameraPWA;
  public motionDatas: Observable<IMotionPWADatasOptions> = of({message: 'loading...'});
  public img: string;

  customPopoverOptions: any = {
    header: 'Category of Product',
    subHeader: 'Select your type of product'
  };

  creds: AddPost = {
    category: '',
    author: '',
    title: '',
    description: '',
    price: <any>[],
    priceType: '',
    type: '',
    size: '',
    disc: ''
  };

  constructor(
    private _modalCtrl: ModalController,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.img = localStorage.getItem('ionic-img');
    this.startMotion();
  }

  startMotion() {
    const ready = Capacitor.isPluginAvailable('Motion');
    if (!ready) {
      return this.handlError();
    }
    Motion.addListener('orientation', (data) => {
      console.log('::::: data motion', data);
      this.motionDatas = of(data);
    });
  }

  async handlError() {
    const ERROR_MSG = 'error Capacitaor Motion not available';
    this.motionDatas = of({message: ERROR_MSG});
    this.show({message: ERROR_MSG});
    console.log('error Capacitaor Motion not available');
    // use custom plugin
    await motionPWA.start();
    this.motionDatas = motionPWA.datas;
  }

  async show(option: {message: string} = {message: 'Plugin not working'}) {
    await Toast.show({
      text: option.message
    });
  }

  async startCamera() {
    const pict = await cameraPWA.start();
  }

  savePicture() {
    console.log('picture saved!');
    if (!cameraPWA.img.src) {
      return console.log('err');
    }
    localStorage.setItem('ionic-img', cameraPWA.img.src);
    console.log('img url save', cameraPWA.img.src);
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
