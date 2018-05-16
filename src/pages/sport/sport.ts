import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { LocationPage } from "../location/location";

/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html'
})
export class SportPage {
  sport: any;
  sportData: any;
  sportObject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseService) {
    this.sport = navParams.get('sportItem');
    this.sportObject = this.firebaseService.get('sports/'+this.sport.path).valueChanges();
    
    this.sportObject.subscribe((data) => {
      console.log(data)
      if(data && data[0]){
        this.sportData = data[0];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportPage');
  }


  cardClicked(event,i){
    console.log("::test::",this.sportData.schedule[i]);
      this.navCtrl.push(LocationPage,{
        "sportItem" : this.sport,
        "location":  this.sportData.schedule[i].location
      });
  }
}
