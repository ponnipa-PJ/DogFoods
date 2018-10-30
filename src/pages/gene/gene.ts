import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { HttpClient } from '../../../node_modules/@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-gene',
  templateUrl: 'gene.html',
})
export class GenePage {
  weights;
  food;
  release: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public data: DataProvider) {
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
    this.data.getGene();
    // console.log(this.data.getGene()[1]);
  }

  go_tabs(g, w, food) {
    if (this.data.Hours>="25"){
      alert ('กรุณากรอกเวลาให้ถูกต้อง');
      return;
    }else if (this.data.Hours<"00"){
      alert ('กรุณากรอกเวลาให้ถูกต้อง');
      return;
    }
    localStorage.setItem('g', g);
    localStorage.setItem('w', w);
    localStorage.setItem('food', food);
    this.navCtrl.push(TabsPage);
    this.data.release = this.release;

  }
  onChange(id){
    this.weights = this.data.getWeight(id);
    // console.log(this.weights);

  }
  getFood(weight){
    this.food = this.data.getFood(weight);
    // console.log(this.data.getFood(weight));
  }
  // getgene() {

  //   this.http.get("http://localhost/pedigree/gene.php?getAllGene=1").subscribe(data => {
  //     // console.log(data);
  //     this.genes = data;
  //   }, err => {
  //     console.log(err);
  //   });
  // }

  // onChange(id) {
  //   this.data.getWeight;
  //   this.http.get("http://localhost/pedigree/gene.php?getWeight=1&id=" + id).subscribe(data => {
  //     // console.log(data);
  //     this.weights = data;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  // getFood(weight) {
  //   this.http.get("http://localhost/pedigree/gene.php?getFood=1&weight=" + weight).subscribe(data => {
  //     // console.log(data[0].food);
  //     this.food = data[0].food;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
}
