import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {myHttpService} from '../../app/utility/service/myhttpservice';
import {LoginPage} from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  myList = []
  isAllSelected = false;//记录全选复选框是否被选中
  constructor
  (public navCtrl: NavController, 
    public navParams: NavParams,
    private myHttp : HttpClient,
    private myService : myHttpService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  //每一次进入都会执行的钩子函数
  ionViewWillEnter(){
    var url = "http://127.0.0.1:8080/cart/list";
    // this.myHttp.get(url,{withCredentials:true}).subscribe((result)=>{
    // })
    this.myService.sendRequest(url,(result)=>{
      //console.log(result);
      //条件判断
      if(result.code == 300){
        //未登录，跳转到登录页面
        this.navCtrl.push(LoginPage);
      }else if(result.code == 200){
        //result.data 就是购物车列表,保存到视图中渲染
        this.myList = result.data;
        //遍历 为每一个商品添加属性记录是否被选中
        for(var i=0;i<this.myList.length;i++){
          this.myList[i].isSelected = false;
        }
      }
    })
  }
  //处理全选
  handleSelsctAll(){
    //将每一个商品复选框选中的值 修改为当前全选的值一致
    for(var i=0;i<this.myList.length;i++){
      this.myList[i].isSelected = this.isAllSelected;
    }
  }
  //选中某一个商品 逻辑与运算 赋值给 handleSelsctAll
  handleSelectedOne(){
    var result = true;
    for( var i=0;i<this.myList.length;i++){
      result = result && this.myList[i].isSelected;
    }
    //与运算 赋值给 handleSelsctAll
    this.isAllSelected = result;
  }
  //计算选中商品的总价格
  calcAll(){
    var result = 0;
    for(var i=0;i<this.myList.length;i++){
      if(this.myList[i].isSelected){
        result += (this.myList[i].count*this.myList[i].price)
      }
    }
    return result;
  }
  //跳转到订单确认页面
  jump(){
    this.navCtrl.push(OrderConfirmPage);
  }
}
