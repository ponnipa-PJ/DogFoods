import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { GenePage } from './gene';

@NgModule({
  declarations: [
    GenePage,
  ],
  imports: [
    IonicPageModule.forChild(GenePage),
  ],
})
export class GenePageModule {}
