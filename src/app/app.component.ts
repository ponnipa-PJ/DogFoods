import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public data:DataProvider) {
    this.data.food = 1759;
    this.data.persent = 100;
    this.data.persents = 78;
    this.data.container = 6241;
    this.data.volume ;
    this.data.Hours ="06";
    this.data.Minutes ="00";
    this.data.Hourss = "06";
    this.data.six="12.00";
    this.data.v = (-28.0481);
    this.data.sum;
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     
  
    });
  }
}
