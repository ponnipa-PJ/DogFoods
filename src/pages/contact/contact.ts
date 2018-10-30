import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {



  constructor(public navCtrl: NavController, public NavParams: NavParams, public data: DataProvider) {
  }

}
