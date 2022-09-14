import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TablinksPageModule } from './layout/tablinks/tablinks.module';
import { WelcomePageModule} from './welcome/welcome.module';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule, IonicModule.forRoot({
    mode: 'ios'
}), AppRoutingModule, TablinksPageModule, WelcomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
