import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gene;
  w;
  g;
  food ;
  release;


  constructor(public navCtrl: NavController, public app:App, public navParams: NavParams, public data:DataProvider) {
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
    this.getGene(localStorage.getItem('g'));
    this.w = localStorage.getItem('w');
    this.getFood(localStorage.getItem('w'));
    this.release = this.data.release;

    const time = new Date();
    if(time.getHours >= this.data.Hours && time.getMinutes() == this.data.Minutes){
      alert('จ่ายอาหารอัตโนมัติ'+this.data.volume+'กรัม'+'เวลา'+this.data.Hours+'.'+this.data.Minutes+'น.');
      if(this.data.food < this.data.volume){
        alert('อาหารไม่พอ กำลังเติมอาหารอัตโนมัติ');
        if (this.data.container<1759) {
          alert('อาหารไม่พอ!!! กรุณาเติมอาหารในถังใหญ่');
          return;
        }
        // if(this.feed < this.data.food) {
          if ( this.data.container < 1759 - this.data.food ) {  
            this.data.food = this.data.container + this.data.food;
            this.data.container = 1759;
            this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
            this.data.persent = 100;
            this.data.persents = ((this.data.container * 100) / 6214).toFixed(0);
            this.data.persents = 78;    
          } else {
    
            this.data.container = this.data.container - 1759 + this.data.food;
            this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
            this.data.persents = ((this.data.container * 100) / 6214).toFixed(0);
            this.data.persent = 100;
            this.data.persents = 78;
            this.data.food = 1759-this.data.food; 
          }
      }
      // }
      this.data.food = this.data.food - this.data.volume;
      this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
      this.data.persents = ((this.data.container * 100) / 8000).toFixed(0);
    }


  }
  ionViewDidLoad() {
    console.log(this.data.first);
    console.log(this.data.six);

  }


  delete(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }
  edit(){
    this.navCtrl.push(EditPage);
    console.log("edit");
  }
  getGene(g){
      this.g = this.data.getGene()[g];
      console.log(this.g);
  }
  getFood(w){
    this.food = this.data.getFood(w);
    this.data.volume = this.food/2;
    // console.log(this.data.volume);
  }
  // getFood(w){
  //   this.http.get("http://localhost/pedigree/gene.php?getFoodByWeight=1&weight="+w).subscribe( data => {
  //     // console.log(data[0].food);
  //     this.food = data[0].food;
  //     this.data.g = this.food/2;
  //     console.log(this.data.g);


  //   }, err => {
  //     console.log(err);
  //   });
  // }
}
