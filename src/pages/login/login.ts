import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { myHttpService } from '../../app/utility/service/myhttpservice';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myName = ""
  myPwd = ""
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private myHttp : HttpClient,
    private myService : myHttpService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    var url = "http://127.0.0.1:8080/user/login";
    //获取 用户说输入的用户名和密码
    this.myService.setPostRequest(
      url,
      (result)=>{
        console.log(result);
        if(result.code == 200){
          //返回上一页
          this.navCtrl.pop();
        }else{
          //显示通知 登录失败
          this.myService.showToast("登录失败！");
        }
      },
      {uname:this.myName,upwd:this.myPwd}
    );
    // this.myHttp.post(url,{uname:"dingding",upwd:"123456"}).subscribe((result)=>{
    //   console.log(result);
    // });
  }
}
