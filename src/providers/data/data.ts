import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  public release:any;
  public food:any;
  public persent:any;
  public persents:any;
  public container:any;  ;
  public g:any;
  public volume:any;
  public Hours:any;
  public Minutes:any;
  public Hourss:any;
  public six:any;
  public first:any;
  public v:any;
  public sum:any;

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getGene(){
    return [
      {id:0,gene:"ตุ๊กตา"},
      {id:1,gene:"เล็ก"},
      {id:2,gene:"กลาง"},
      {id:3,gene:"ใหญ่"}
    ];
  }
  getWeight(id){
    if(id == 0) {
      return [
        {weight:4},{weight:5}
      ];
    } else if(id == 1) {
      return [
        {weight:6},{weight:7},{weight:8},{weight:9},{weight:10}
      ];
    } else if(id == 2) {
      return [
        {weight:12},{weight:14},{weight:16},{weight:18},{weight:20},{weight:22},{weight:24}
      ];
    } else if(id == 3) {
      return [
        {weight:26},{weight:28},{weight:30},{weight:32},{weight:34},{weight:36},{weight:38},{weight:40}
      ];
    }
  }
  getFood(weight) {
    if(weight == 4){
      return [
        345
      ];
    }else if (weight == 5){
      return [
        410
      ];
    }else if (weight == 6){
      return [
        470
      ];
    }else if (weight == 7){
      return [
        525
      ];
    }else if (weight == 8){
      return [
        580
      ];
    }else if (weight == 9){
      return [
        635
      ];
    }else if (weight == 10){
      return [
        690
      ];
    }else if (weight == 12){
      return [
        790
      ];
    }else if (weight == 14){
      return [
        885
      ];
    }else if (weight == 16){
      return [
        980
      ];
    }else if (weight == 18){
      return [
        1070
      ];
    }else if (weight == 20){
      return [
        1155
      ];
    }else if (weight == 22){
      return [
        1240
      ];
    }else if (weight == 24){
      return [
        1325
      ];
    }else if (weight == 26){
      return [
        1410
      ];
    }else if (weight == 28){
      return [
        1490
      ];
    }else if (weight == 30){
      return [
        1570
      ];
    }else if (weight == 32){
      return [
        1645
      ];
    }else if (weight == 34){
      return [
        1720
      ];
    }else if (weight == 36){
      return [
        1800
      ];
    }else if (weight == 38){
      return [
        1870
      ];
    }else if (weight == 40){
      return [
        1945
      ];
    }
  }
}

