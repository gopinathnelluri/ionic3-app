import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SettingsPage } from "../settings/settings";
import { HomePage } from "../home/home";
import { ContactPage } from "../contact/contact";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = SettingsPage;
  tab2Root = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//71672070481
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
