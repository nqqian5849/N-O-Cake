import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CartPage } from '../pages/cart/cart';
import { DetailPage } from '../pages/detail/detail';
import { IndexPage } from '../pages/index/index';
import { LoginPage } from '../pages/login/login';
import { NotFoundPage } from '../pages/not-found/not-found';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { PayPage } from '../pages/pay/pay';
import { UserCenterPage } from '../pages/user-center/user-center';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {myHttpService } from './utility/service/myhttpservice';
@NgModule({
  declarations: [
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    NotFoundPage,
    LoginPage,
    IndexPage,
    DetailPage,
    CartPage,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UserCenterPage,
    PayPage,
    OrderConfirmPage,
    NotFoundPage,
    LoginPage,
    IndexPage,
    DetailPage,
    CartPage,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    myHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
