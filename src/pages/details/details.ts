import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the DestailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [Calendar]
})
export class DetailsPage {

  sport: any;
  category: any;
  gender: any;
  index: any;
  detailsObject: any;
  details: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseService, private calendar: Calendar) {
    this.sport = navParams.get('sport');
    this.category = navParams.get('category');
    this.gender = navParams.get('gender');
    this.index = navParams.get('index');

    this.detailsObject = this.firebaseService.get(this.gender+ '/sports/'+this.sport.path+"/"+this.category+"/schedule"+"/"+this.index).valueChanges();
    
    this.detailsObject.subscribe((data) => {
      console.log("new",data)
      if(data ){
        this.details = data[0];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestailsPage');
  }

}
