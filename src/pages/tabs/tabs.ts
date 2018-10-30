import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CameraPage } from '../camera/camera';
import { DataProvider } from '../../providers/data/data';
import $ from 'jquery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CameraPage;

  constructor( public data: DataProvider) {
  }
  OnSelect(){
    // console.log(this.data.food);
    // if(this.data.food < this.data.food) {
    //   if ( this.data.container < 1759 - this.data.food ) {

    //     this.data.food = this.data.container + this.data.food;
    //     this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
    //     this.data.container = 0;

    //   } else {

    //     this.data.container = this.data.container - 1759 + this.data.food;
    //     this.data.persent = ((this.data.food * 100) / 1759).toFixed(0);
    //     this.data.persent = 100;
    //     this.data.food = 1759;

    //   }
      
    // }
    // console.log(this.data.food);
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
    // console.log(this.data.volume);
    // console.log(time.getHours()+time.getMinutes());
    // console.log(this.data.Minutes);
    console.log(this.data.sum);
    console.log((this.data.v-this.data.volume)/(-9.81));
    console.log(this.data.container);
    console.log(this.data.persents);
    console.log(this.data.food);
    console.log(this.data.persent);
    $('.bars .levels').css({ 'height': this.data.persents + '%' });
    $('.bar .level').css({ 'height': this.data.persent + '%' },this.data.sum
    );
  }
}
