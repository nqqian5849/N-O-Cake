import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { myHttpService } from "../../app/utility/service/myhttpservice";
import { PayPage } from '../pay/pay';
// import { IndexPage } from '../index/index';
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  myList = []
  constructor(public navCtrl: NavController, public navParams: NavParams,private myServer :myHttpService,private modalCtrl :ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');

 
    var url = "http://127.0.0.1:8080/cart/list"
    this.myServer.sendRequest(
      url,
      (result)=>{
        console.log(result)
        //result.data渲染在视图的缩略图列表
        this.myList = result.data
      });
    }
  showModal(){
    var myModal = this.modalCtrl.create(PayPage);
    myModal.present();
    //指定模态窗口在被关闭后 要执行的处理，true跳转到首页
    myModal.onDidDismiss((data)=>{
      if(data){
        //跳转到首页 tab
        // this.navCtrl.push(IndexPage);
        this.navCtrl.parent.select(0);
      }
    })
  }
}
