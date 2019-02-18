import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { NotFoundPage } from '../not-found/not-found';
import { CartPage } from '../cart/cart';
import { LoginPage } from '../login/login';
import { myHttpService } from '../../app/utility/service/myhttpservice';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  details = {}
  notFound = NotFoundPage
  cart = CartPage

  constructor(public navCtrl: NavController, public navParams: NavParams,private myHttp:HttpClient,
    private loadingCtrl:LoadingController,
    private myService : myHttpService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    //获取跳转时存在id中的值
    var myId = this.navParams.get("id");
    //向指定的url 发生请求
    var url = "http://127.0.0.1:8080/product/detail?lid="+myId;
    this.myHttp.get(url).subscribe((result:any)=>{
       //将result中的数据保存起来,定义一个details的空对象,result后加:any,不做任何的类型,然后保存起来,到视图中做渲染,找到detail对应的HTML文件
       this.details=result.details;
      // console.log(result);
      this.myService.sendRequest(url,(
        result:any)=>{
        this.details=result.details;
        })
    });
  }
  addToCart(){
    var myLoading = this.loadingCtrl.create({
      content:"正在加载...",

    });
    myLoading.present();

    //发送网络请求 cart/add
    var myId = this.navParams.get("id");
    var url="http://127.0.0.1:8080/cart/add?buyCount=1&lid="+myId;
    this.myHttp.get(url,{withCredentials:true}).subscribe((result:any)=>{
      myLoading.dismiss();
      // console.log(result);
      if(result.code == 300){
        //跳转到login
        this.navCtrl.push(LoginPage);
      }else if(result.code == 200){
        this.myService.showToast("添加成功！");
      }else{
        this.myService.showToast("添加失败！");
      }
    });
  }
}
