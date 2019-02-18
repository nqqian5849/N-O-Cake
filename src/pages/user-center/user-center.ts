import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index/index';
import {myHttpService} from '../../app/utility/service/myhttpservice';
/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private myService:myHttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }
  out(){
    var url = "http://127.0.0.1:8080/user/logout";
    this.myService.sendRequest(url,(result)=>{
      console.log(result);
      this.navCtrl.push(IndexPage);
    });
  }
}
