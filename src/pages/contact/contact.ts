import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { icons } from '../../providers/icons';
import { FirebaseService } from "../../providers/firebase-service";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  customIcons: any;
  contactObservable: any;
  contact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService) {
    this.customIcons = icons;
    this.contactObservable = this.firebaseService.get('contact').valueChanges();
    this.contactObservable.subscribe((data)=>{
        this.contact = data[0];
    })
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
