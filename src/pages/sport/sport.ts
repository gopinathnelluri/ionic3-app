import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { LocationPage } from "../location/location";
import { categories } from '../../providers/categories';
import { Calendar } from '@ionic-native/calendar';

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
  providers: [Calendar]
})
export class SportPage {
  category: any;
  categoryDetails: any;
  sport: any;
  gender: any;
  sportData: any;
  sportObject: any;
  showBreadCrumb: any;
  calenderTitle: any = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseService, private calendar: Calendar) {
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
        this.calenderTitle = (this.gender=='male'?'Men':'Women')+"'s "+this.sport.name+" : " +this.categoryDetails.title;
      }
    })
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SportPage');
  }

  dateClicked(event,i){
    var destination = this.sportData.schedule[i].location.address+", "+this.sportData.schedule[i].location.city+", "+this.sportData.schedule[i].location.state+" "+this.sportData.schedule[i].location.zip;
      
    this.calendar.hasReadWritePermission().then((data) => {
      if(data){
        this.calendar.createEventInteractively( this.calenderTitle, destination, "Added by so and so app (example note)", new Date(this.sportData.schedule[i].date), null);
      } else {
        this.calendar.requestReadWritePermission().then((data) => {
            if(data){
              this.calendar.createEventInteractively( this.calenderTitle, destination, "Added by so and so app (example note)", new Date(this.sportData.schedule[i].date), null);
            }
        })
      }
    })
  }

  addressClicked(event,i){
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
