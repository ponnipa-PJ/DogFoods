import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-manualfood',
  templateUrl: 'manualfood.html',
})
export class ManualfoodPage {

  feed:number = this.data.volume;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {
    this.data.sum = ((this.data.v-this.data.volume)/(-9.81));

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ManualfoodPage');
  }
  go() {
    if(this.feed >1759){
      alert ('กรุณากรอกปริมาณอาหารที่ถูกต้อง');
      return;
    }
    if(this.data.food < this.feed){
      alert('อาหารไม่พอ กำลังเติมอาหารอัตโนมัติ');
      if (this.data.container<1759) {
        alert('อาหารไม่พอ!!! กรุณาเติมอาหารในถังใหญ่');
        return;
      }        
        if ( this.data.container < 1759 - this.data.food ) {
          this.data.food = this.data.container + this.data.food;
          this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
          this.data.persents = ((this.data.container * 100) / 6214).toFixed(0);
          this.data.container = 1759;
        } else {
          this.data.container = this.data.container - 1759 + this.data.food;
          this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
          this.data.persents = ((this.data.container * 100) / 6214).toFixed(0);
          this.data.persent = 100;
          this.data.persents = 78;
          this.data.food = 1759;
  
        }
    }
    alert('กำลังจ่ายอาหาร'+this.feed+'กรัม');

    this.data.food = this.data.food - this.feed;
    this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
    this.data.persents = ((this.data.container * 100) / 8000).toFixed(0);
    this.navCtrl.parent.select(2);
    // this.navCtrl.push(ContactPage, this.f);
  // localStorage.setItem('f', f);
  }

}
