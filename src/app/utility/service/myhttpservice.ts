//实现一个服务类，在此封装一个方法，处理网络请求（请求显示一个loading，请求结束关闭）
//引入
import {HttpClient} from '@angular/common/http';
import {LoadingController,ToastController} from 'ionic-angular';
import {Injectable} from '@angular/core';
//angular中 providedIn 用来指定要注入到根模块中,在根模块中任何一个组件都可引入调用
@Injectable()
//导出
export class myHttpService{
    constructor(
        private loadingCtrl : LoadingController,
        private myHttp : HttpClient,
        private toastCtrl :ToastController
    ){}
    sendRequest(url,callback){
        //显示loading
        var myLoading = this.loadingCtrl.create({
            content:"正在加载..."
        });
        myLoading.present();
        //发送请求
        this.myHttp.get(url,{withCredentials:true}).subscribe((result)=>{
        //关闭loading
            myLoading.dismiss();
            console.log(result);
            callback(result);
        })
    }
    /*
        url请求的地址
        callback 请求成功之后的回调函数
        data post请求时需要携带的参数
    */ 
    setPostRequest(url,callback,data){
        //显示loading
        var myLoading = this.loadingCtrl.create({
            content:"正在加载..."
        });
        myLoading.present();
        //发送请求
        this.myHttp.post(url,data,{withCredentials:true}).subscribe((result)=>{
            //关闭loading
            myLoading.dismiss();
            callback(result);
        });
    }
    //显示通知
    showToast(msg){
        this.toastCtrl.create({
            message:msg,
            duration:1500
        }).present();
    }
}