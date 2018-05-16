import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { Observable } from 'rxjs/Observable';
import { SportPage } from "../sport/sport";
import { icons } from '../../providers/icons';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  customIcons: any;
  

  constructor(public navCtrl: NavController, private firebaseService: FirebaseService) {
       this.items = this.firebaseService.get('list').valueChanges();
       this.customIcons = icons;
  }

  navigateToSport(event,item){
    this.navCtrl.push(SportPage,{
      "sportItem" : item
    });
  }

}
