webpackJsonp([9],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttpservice__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_pay__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { IndexPage } from '../index/index';
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderConfirmPage = /** @class */ (function () {
    function OrderConfirmPage(navCtrl, navParams, myServer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myServer = myServer;
        this.modalCtrl = modalCtrl;
        this.myList = [];
    }
    OrderConfirmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderConfirmPage');
        var url = "http://127.0.0.1:8080/cart/list";
        this.myServer.sendRequest(url, function (result) {
            console.log(result);
            //result.data渲染在视图的缩略图列表
            _this.myList = result.data;
        });
    };
    OrderConfirmPage.prototype.showModal = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pay_pay__["a" /* PayPage */]);
        myModal.present();
        //指定模态窗口在被关闭后 要执行的处理，true跳转到首页
        myModal.onDidDismiss(function (data) {
            if (data) {
                //跳转到首页 tab
                // this.navCtrl.push(IndexPage);
                _this.navCtrl.parent.select(0);
            }
        });
    };
    OrderConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-confirm',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\order-confirm\order-confirm.html"*/'<!--\n  Generated template for the OrderConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>order-confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--实现一个缩略图列表-->\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <ion-icon name="pin"></ion-icon>\n      </ion-thumbnail>\n      <h3>收货人</h3>\n      <p>收货地址: 北京万寿路...</p>\n    </ion-item>\n    <ion-item *ngFor="let tmp of myList">\n      <ion-thumbnail item-start>\n        <img [src]="\'../../assets/\'+tmp.pic" alt="">\n      </ion-thumbnail>\n      <h3>{{tmp.title}}</h3>\n      <p>{{tmp.spec}}</p>\n      <p style="color:red">{{tmp.price+\'x\'+tmp.count}}</p>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="secondary" (click)="showModal()">在线支付</button>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\order-confirm\order-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttpservice__["a" /* myHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], OrderConfirmPage);
    return OrderConfirmPage;
}());

//# sourceMappingURL=order-confirm.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayPage = /** @class */ (function () {
    function PayPage(navCtrl, navParams, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
    }
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
    };
    PayPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(false);
    };
    PayPage.prototype.showModal = function () {
        var _this = this;
        var myLoading = this.loadingCtrl.create({
            content: "支付中..."
            // duration:3000
        });
        myLoading.present();
        setTimeout(function () {
            myLoading.dismiss();
            _this.viewCtrl.dismiss(true);
        }, 3000);
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\pay\pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <!-- 指定高度容器 -->\n  <div style="height:200px;width:400px;background:rgba(0,0,0,0.5)"></div>\n  <!--基于栅格系统的自定义布局-->\n  <ion-grid>\n    <ion-row align-item-center>\n      <ion-col>\n        <button ion-button clear (click)="closeModel()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 style="text-align:center">\n        <h2>确认付款</h2>\n      </ion-col>\n      <ion-col style="text-align:right">\n        <button>\n            <ion-icon name="help"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style="text-align:center">\n        <h2 style="color:red">￥300</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        支付账号\n      </ion-col>\n      <ion-col style="text-align:right">\n        kunyshaw@gmail.com\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          付款账号\n        </ion-col>\n        <ion-col style="text-align:right">\n          花呗\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="secondary" (click)="showModal()">支付</button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\pay\pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_utility_service_myhttpservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, myHttp, loadingCtrl, myService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myHttp = myHttp;
        this.loadingCtrl = loadingCtrl;
        this.myService = myService;
        this.details = {};
        this.notFound = __WEBPACK_IMPORTED_MODULE_3__not_found_not_found__["a" /* NotFoundPage */];
        this.cart = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DetailPage');
        //获取跳转时存在id中的值
        var myId = this.navParams.get("id");
        //向指定的url 发生请求
        var url = "http://127.0.0.1:8080/product/detail?lid=" + myId;
        this.myHttp.get(url).subscribe(function (result) {
            //将result中的数据保存起来,定义一个details的空对象,result后加:any,不做任何的类型,然后保存起来,到视图中做渲染,找到detail对应的HTML文件
            _this.details = result.details;
            // console.log(result);
            _this.myService.sendRequest(url, function (result) {
                _this.details = result.details;
            });
        });
    };
    DetailPage.prototype.addToCart = function () {
        var _this = this;
        var myLoading = this.loadingCtrl.create({
            content: "正在加载...",
        });
        myLoading.present();
        //发送网络请求 cart/add
        var myId = this.navParams.get("id");
        var url = "http://127.0.0.1:8080/cart/add?buyCount=1&lid=" + myId;
        this.myHttp.get(url, { withCredentials: true }).subscribe(function (result) {
            myLoading.dismiss();
            // console.log(result);
            if (result.code == 300) {
                //跳转到login
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else if (result.code == 200) {
                _this.myService.showToast("添加成功！");
            }
            else {
                _this.myService.showToast("添加失败！");
            }
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides autoplay=2000 loop=true pager=true style="height:200px" *ngIf="details.picList">\n    <ion-slide *ngFor="let tmp of details.picList">\n      <img [src]="\'../../assets/\'+tmp.md" alt="">\n    </ion-slide>\n  </ion-slides>\n  <h4>{{details.title}}</h4>\n  <p style="color:red">{{details.subtitle}}</p>\n  <p style="color:red">{{details.price | currency}}</p>\n\n\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear color="dark" [navPush]="notFound">\n          <ion-icon name="heart"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear color="dark" [navPush]="cart">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear color="dark" [navPush]="notFound">\n          <ion-icon name="bookmark"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button (click)="addToCart()" color="danger" ion-button block>加入购物车</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__app_utility_service_myhttpservice__["a" /* myHttpService */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_center_user_center__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabIndex = __WEBPACK_IMPORTED_MODULE_2__index_index__["a" /* IndexPage */];
        this.tabCart = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        this.tabUS = __WEBPACK_IMPORTED_MODULE_4__user_center_user_center__["a" /* UserCenterPage */];
        this.tabNotFound = __WEBPACK_IMPORTED_MODULE_5__not_found_not_found__["a" /* NotFoundPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab tabsHideOnSubPages=true [root]="tabIndex" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabCart" tabTitle="购物车" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tabUS" tabTitle="用户中心" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tabNotFound" tabTitle="设置" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserCenterPage = /** @class */ (function () {
    function UserCenterPage(navCtrl, navParams, myService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myService = myService;
    }
    UserCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserCenterPage');
    };
    UserCenterPage.prototype.out = function () {
        var _this = this;
        var url = "http://127.0.0.1:8080/user/logout";
        this.myService.sendRequest(url, function (result) {
            console.log(result);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_index__["a" /* IndexPage */]);
        });
    };
    UserCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-center',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\user-center\user-center.html"*/'<!--\n  Generated template for the UserCenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user-center</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align:center;margin-bottom:20px;">\n    <img src="../../assets/imgs/c-2.jpg" alt="" style="border-radius:50%;">\n  </div>\n  <button ion-button block color="secondary" (click)="out()">\n    退出登录\n  </button>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\user-center\user-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__["a" /* myHttpService */]])
    ], UserCenterPage);
    return UserCenterPage;
}());

//# sourceMappingURL=user-center.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		284,
		8
	],
	"../pages/detail/detail.module": [
		285,
		7
	],
	"../pages/home/home.module": [
		286,
		6
	],
	"../pages/index/index.module": [
		288,
		5
	],
	"../pages/login/login.module": [
		287,
		4
	],
	"../pages/not-found/not-found.module": [
		289,
		3
	],
	"../pages/order-confirm/order-confirm.module": [
		291,
		2
	],
	"../pages/pay/pay.module": [
		290,
		1
	],
	"../pages/user-center/user-center.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_index_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_not_found_not_found__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_confirm_order_confirm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pay_pay__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_center_user_center__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utility_service_myhttpservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__pages_user_center_user_center__["a" /* UserCenterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_not_found_not_found__["a" /* NotFoundPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/not-found/not-found.module#NotFoundPageModule', name: 'NotFoundPage', segment: 'not-found', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-confirm/order-confirm.module#OrderConfirmPageModule', name: 'OrderConfirmPage', segment: 'order-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-center/user-center.module#UserCenterPageModule', name: 'UserCenterPage', segment: 'user-center', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__pages_user_center_user_center__["a" /* UserCenterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_not_found_not_found__["a" /* NotFoundPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__utility_service_myhttpservice__["a" /* myHttpService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//实现一个服务类，在此封装一个方法，处理网络请求（请求显示一个loading，请求结束关闭）
//引入



//angular中 providedIn 用来指定要注入到根模块中,在根模块中任何一个组件都可引入调用
var myHttpService = /** @class */ (function () {
    function myHttpService(loadingCtrl, myHttp, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.myHttp = myHttp;
        this.toastCtrl = toastCtrl;
    }
    myHttpService.prototype.sendRequest = function (url, callback) {
        //显示loading
        var myLoading = this.loadingCtrl.create({
            content: "正在加载..."
        });
        myLoading.present();
        //发送请求
        this.myHttp.get(url, { withCredentials: true }).subscribe(function (result) {
            //关闭loading
            myLoading.dismiss();
            console.log(result);
            callback(result);
        });
    };
    /*
        url请求的地址
        callback 请求成功之后的回调函数
        data post请求时需要携带的参数
    */
    myHttpService.prototype.setPostRequest = function (url, callback, data) {
        //显示loading
        var myLoading = this.loadingCtrl.create({
            content: "正在加载..."
        });
        myLoading.present();
        //发送请求
        this.myHttp.post(url, data, { withCredentials: true }).subscribe(function (result) {
            //关闭loading
            myLoading.dismiss();
            callback(result);
        });
    };
    //显示通知
    myHttpService.prototype.showToast = function (msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 1500
        }).present();
    };
    myHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])()
        //导出
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], myHttpService);
    return myHttpService;
}());

//# sourceMappingURL=myhttpservice.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_confirm_order_confirm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, myHttp, myService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myHttp = myHttp;
        this.myService = myService;
        this.myList = [];
        this.isAllSelected = false; //记录全选复选框是否被选中
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    //每一次进入都会执行的钩子函数
    CartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var url = "http://127.0.0.1:8080/cart/list";
        // this.myHttp.get(url,{withCredentials:true}).subscribe((result)=>{
        // })
        this.myService.sendRequest(url, function (result) {
            //console.log(result);
            //条件判断
            if (result.code == 300) {
                //未登录，跳转到登录页面
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else if (result.code == 200) {
                //result.data 就是购物车列表,保存到视图中渲染
                _this.myList = result.data;
                //遍历 为每一个商品添加属性记录是否被选中
                for (var i = 0; i < _this.myList.length; i++) {
                    _this.myList[i].isSelected = false;
                }
            }
        });
    };
    //处理全选
    CartPage.prototype.handleSelsctAll = function () {
        //将每一个商品复选框选中的值 修改为当前全选的值一致
        for (var i = 0; i < this.myList.length; i++) {
            this.myList[i].isSelected = this.isAllSelected;
        }
    };
    //选中某一个商品 逻辑与运算 赋值给 handleSelsctAll
    CartPage.prototype.handleSelectedOne = function () {
        var result = true;
        for (var i = 0; i < this.myList.length; i++) {
            result = result && this.myList[i].isSelected;
        }
        //与运算 赋值给 handleSelsctAll
        this.isAllSelected = result;
    };
    //计算选中商品的总价格
    CartPage.prototype.calcAll = function () {
        var result = 0;
        for (var i = 0; i < this.myList.length; i++) {
            if (this.myList[i].isSelected) {
                result += (this.myList[i].count * this.myList[i].price);
            }
        }
        return result;
    };
    //跳转到订单确认页面
    CartPage.prototype.jump = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_confirm_order_confirm__["a" /* OrderConfirmPage */]);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="text-align:center">\n  <div *ngIf="myList.length == 0">\n    <img src="../../assets/img/404/404_img1.png" alt=""><br>\n    <img src="../../assets/img/404/404_img2.png" alt="">\n    <button ion-button block color="secondary">逛逛去</button>\n  </div>\n\n\n    <ion-list >\n      <ion-item *ngFor="let tmp of myList">\n        <ion-checkbox [(ngModel)]="tmp.isSelected" (ngModelChange)="handleSelectedOne()"></ion-checkbox>\n        <ion-thumbnail item-end>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img [src]="\'../../assets/\'+tmp.pic" alt="">\n              </ion-col>\n              <ion-col>\n                <h3>{{tmp.title}}</h3>         \n                <p color="red">{{tmp.price|currency:"CNY"}}</p>\n                <button>+</button>\n                <span>{{tmp.count}}</span>\n                <button>-</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-thumbnail>\n      </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col col-2>\n        <ion-checkbox [(ngModel)]="isAllSelected" (ngModelChange)="handleSelsctAll()"></ion-checkbox>\n      </ion-col>\n      <ion-col>\n        全选 合计 {{calcAll()}}\n      </ion-col>\n        <ion-col>\n          <button ion-button block color="danger" (click)="jump()">去结算</button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__["a" /* myHttpService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, myHttp, myService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myHttp = myHttp;
        this.myService = myService;
        this.myName = "";
        this.myPwd = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var url = "http://127.0.0.1:8080/user/login";
        //获取 用户说输入的用户名和密码
        this.myService.setPostRequest(url, function (result) {
            console.log(result);
            if (result.code == 200) {
                //返回上一页
                _this.navCtrl.pop();
            }
            else {
                //显示通知 登录失败
                _this.myService.showToast("登录失败！");
            }
        }, { uname: this.myName, upwd: this.myPwd });
        // this.myHttp.post(url,{uname:"dingding",upwd:"123456"}).subscribe((result)=>{
        //   console.log(result);
        // });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="text-align:center">\n  <img src="../../assets/imgs/c-2.jpg" alt="" style="border-radius:50%; width:100px; height:100px;" >\n  <ion-list>\n    <ion-item>\n      <ion-label for="uname">姓名:</ion-label>\n      <ion-input [(ngModel)]="myName" type="text" id="uname" placeholder="请输入用户名"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label for="upw">密码:</ion-label>\n      <ion-input [(ngModel)]="myPwd" type="password" id="upw" placeholder="请输入密码"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n      <ion-row>\n          <ion-col col-6 style="text-align:left">\n            <button ion-button clear color="dark">免费注册</button>\n          </ion-col>\n          <ion-col col-6 style="text-align:right">\n              <button ion-button clear color="dark">忘记密码</button>\n            </ion-col>\n        </ion-row>\n  </ion-grid>\n\n  <button (click)="login()" ion-button block color="danger" round>登录</button>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__app_utility_service_myhttpservice__["a" /* myHttpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotFoundPage = /** @class */ (function () {
    function NotFoundPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.count = 5;
        this.myTimer = null;
        this.isShow = true;
    }
    NotFoundPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NotFoundPage');
        this.myTimer = setInterval(function () {
            _this.count--;
            if (_this.count == 0) {
                //返回上一页
                if (_this.navCtrl.canGoBack()) {
                    _this.navCtrl.pop();
                }
                else {
                    //不可以返回，移除倒计时
                    _this.isShow = false;
                }
            }
        }, 1000);
    };
    //页面离开时，做清理工作
    NotFoundPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.myTimer);
    };
    NotFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-not-found',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\not-found\not-found.html"*/'<!--\n  Generated template for the NotFoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>not-found</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="text-align:center"> \n  <img src="../../assets/img/404/404_img1.png" alt="">\n  <br>\n  <img src="../../assets/img/404/404_img2.png" alt="">\n  <h2>页面开发中</h2>\n  <h3 *ngIf="isShow">{{count}}s后自动返回上一页</h3>\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\not-found\not-found.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotFoundPage);
    return NotFoundPage;
}());

//# sourceMappingURL=not-found.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams, myHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myHttp = myHttp;
        this.myResult = {};
    }
    IndexPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad IndexPage');
        var url = "http://127.0.0.1:8080/index";
        this.myHttp.get(url).subscribe(function (result) {
            // console.log(result);
            _this.myResult = result;
        });
    };
    IndexPage.prototype.jump = function (myId) {
        //跳转到详情页
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: myId });
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index',template:/*ion-inline-start:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\index\index.html"*/'<!--\n  Generated template for the IndexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>index</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- 轮播图 -->\n  <ion-slides style="height:150px" *ngIf="myResult.carouselItems" autoplay=2000 pager=true loop=true>\n    <ion-slide *ngFor="let tmp of myResult.carouselItems">\n      <img [src]="\'../../assets/\'+tmp.img" alt="">\n    </ion-slide>\n  </ion-slides>\n  <!-- 支持横向滚动的容器 -->\n  <ion-scroll style="height:300px;white-space:nowrap" scrollX=true>\n    <ion-card *ngFor="let tmp of myResult.newArrialItems" style="display:inline-block">\n      <ion-card-header>\n        <img [src]="\'../../assets/\'+tmp.pic" style="height:200px" alt="">\n      </ion-card-header>\n      <ion-card-content>\n        {{tmp.title}}\n      </ion-card-content>\n    </ion-card>\n  </ion-scroll>\n  <!-- 缩略图列表 -->\n  <ion-list>\n    <ion-item (click)="jump(tmp.pid)" text-wrap *ngFor="let tmp of myResult.recommendedItems">\n      <ion-thumbnail item-start>\n        <img [src]="\'../../assets/\'+tmp.pic" alt="">\n      </ion-thumbnail>\n      <h3>{{tmp.title}}</h3>\n      <p>{{tmp.details}}</p>\n      <button ion-button clear item-end>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"c:\Users\mlsgh\Desktop\N-O-Cake\src\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map