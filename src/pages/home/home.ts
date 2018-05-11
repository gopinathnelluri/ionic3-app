import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { Observable } from 'rxjs/Observable';
import { SportPage } from "../sport/sport";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseService]
})
export class HomePage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, private firebaseService: FirebaseService) {
       this.items = this.firebaseService.get('list').valueChanges();
  }

  navigateToSport(event,item){
    //alert(path);
    this.navCtrl.push(SportPage,{
      "sportItem" : item
    });
  }

}
