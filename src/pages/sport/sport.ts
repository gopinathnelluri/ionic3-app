import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";

/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html',
  providers: [FirebaseService]
})
export class SportPage {
  sport: any;
  match: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseService) {
    this.sport = navParams.get('sportItem');
    if(this.sport){
        this.match = this.firebaseService.get('list').valueChanges();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportPage');
  }

}
