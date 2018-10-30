import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AutofoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autofood',
  templateUrl: 'autofood.html',
})
export class AutofoodPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public data:DataProvider) {    
    this.data.first = (this.data.Hours+'.'+this.data.Minutes);
    if (this.data.Hours == "00"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "01"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "02"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "03"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "04"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "05"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "06"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "07"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "08"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "09"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "10"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "11"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "12"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "13"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "14"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours == "15"){
      this.data.six = this.data.Hours-(-8)+'.'+this.data.Minutes;
    }else if (this.data.Hours ==16){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if (this.data.Hours ==17){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if (this.data.Hours ==18){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if (this.data.Hours ==19){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if (this.data.Hours ==20){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if(this.data.Hours ==21){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if (this.data.Hours ==22){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if(this.data.Hours ==23){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }else if(this.data.Hours ==24){
      this.data.six = this.data.Hours-16+'.'+this.data.Minutes;
    }
   
    console.log(this.data.six);
  
  }

  ionViewDidLoad() {

    // console.log('ionViewDidLoad AutofoodPage');
  }
  go_tab(){
    if (this.data.Hours>="25"){
      alert ('กรุณากรอกเวลาให้ถูกต้อง');
      return;
    }else if (this.data.Hours<"00"){
      alert ('กรุณากรอกเวลาให้ถูกต้อง');
      return;
    }
    this.navCtrl.parent.select(2);
    // console.log(this.data.volume);
    // this.data.six = this.data.Hours;
    // console.log(this.data.six);

  }
}
