import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  myResult = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,private myHttp:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url = "http://127.0.0.1:8080/index";
    this.myHttp.get(url).subscribe((result)=>{
      // console.log(result);
      this.myResult  = result;
    });
  }
  jump(myId){
    //跳转到详情页
    this.navCtrl.push(DetailPage,{id:myId});
  }
}
