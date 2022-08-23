import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TablinksPageModule } from './layout/tablinks/tablinks.module';
import { LoginPageModule } from './login/login.module';
import {WelcomePageModule} from './welcome/welcome.module';
import {RegisterPageModule} from './register/register.module';




@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
}), AppRoutingModule, TablinksPageModule, WelcomePageModule],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
