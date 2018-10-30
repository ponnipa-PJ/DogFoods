import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenePage } from '../gene/gene';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WelcomePage');
    
  }
  go_gene(){
    this.navCtrl.push(GenePage), {}, {animation:false};
  }
}
