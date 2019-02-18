import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ViewController} from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }
  closeModal(){
    this.viewCtrl.dismiss(false);
  }
  showModal(){
    var myLoading = this.loadingCtrl.create({
      content:"支付中..."
      // duration:3000
    });
    myLoading.present();
    setTimeout(()=>{
      myLoading.dismiss();
      this.viewCtrl.dismiss(true);
    },3000);
  }
}
