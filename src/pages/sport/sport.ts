import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { LocationPage } from "../location/location";
import { categories } from '../../providers/categories';

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
  category: any;
  categoryDetails: any;
  sport: any;
  gender: any;
  sportData: any;
  sportObject: any;
  showBreadCrumb: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseService) {
    this.sport = navParams.get('sportItem');
    this.category = navParams.get('category');
    this.gender = navParams.get('gender');
    this.categoryDetails = categories[this.category];
    console.log(this.categoryDetails)

    this.sportObject = this.firebaseService.get(this.gender+ '/sports/'+this.sport.path+"/"+this.category).valueChanges();
    
    this.sportObject.subscribe((data) => {
      console.log("cat:",data)
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

  ionViewDidEnter(){
    this.showBreadCrumb = true;
  }

  ionViewWillLeave(){
    this.showBreadCrumb = false;
  }
}
