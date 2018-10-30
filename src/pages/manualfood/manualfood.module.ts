import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualfoodPage } from './manualfood';

@NgModule({
  declarations: [
    ManualfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(ManualfoodPage),
  ],
})
export class ManualfoodPageModule {}
