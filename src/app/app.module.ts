import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
//import { SettingsPage } from "../pages/settings/settings";
//import { SettingsPageModule } from "../pages/settings/settings.module";
import { TabsPageModule } from "../pages/tabs/tabs.module";
import { HomePageModule } from "../pages/home/home.module";
import { SportPageModule } from "../pages/sport/sport.module";
import { LocationPageModule } from "../pages/location/location.module";
//import { Push } from "@ionic-native/push";
import { FirebaseService } from "../providers/firebase-service";
import { ContactPageModule } from "../pages/contact/contact.module";
import { ContactPage } from "../pages/contact/contact";
//import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TabsPageModule,
    HomePageModule,
    SportPageModule,
    LocationPageModule,
    ContactPageModule,
    //SettingsPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //SettingsPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
//    Push,
//    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
