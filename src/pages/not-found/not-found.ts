import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  count = 5
  myTimer = null
  isShow = true
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');
    this.myTimer = setInterval(()=>{
      this.count--
      if(this.count == 0){
        //返回上一页
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }else{
          //不可以返回，移除倒计时
          this.isShow = false;
        }
      }
    },1000);
  }
  //页面离开时，做清理工作
  ionViewWillLeave() {
    clearInterval(this.myTimer);
  }
}
