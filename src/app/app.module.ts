import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddressModalPageModule } from './home/modals/address-modal/address-modal.module';
import { SplashPageModule } from './login/splash/splash.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPInterceptor } from './services/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddressModalPageModule, SplashPageModule, HttpClientModule],
  providers: [
    StatusBar,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
