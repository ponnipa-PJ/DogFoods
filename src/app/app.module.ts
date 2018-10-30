import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ManualfoodPage } from '../pages/manualfood/manualfood';
import { WelcomePage } from '../pages/welcome/welcome';
import { GenePage } from '../pages/gene/gene';
import { AutofoodPage } from '../pages/autofood/autofood';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CameraPage } from '../pages/camera/camera';
import { DataProvider } from '../providers/data/data';
import { EditPage } from '../pages/edit/edit';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    GenePage,
    TabsPage,
    AutofoodPage,
    ManualfoodPage,
    CameraPage,
    EditPage
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    GenePage,
    TabsPage,
    AutofoodPage,
    ManualfoodPage,
    CameraPage,
    EditPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
    
  ]
})
export class AppModule { }
