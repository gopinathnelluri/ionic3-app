import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../providers/firebase-service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, private firebaseService: FirebaseService) {
       this.items = firebaseService.get('list').valueChanges();
  }

}
