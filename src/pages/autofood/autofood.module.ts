import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutofoodPage } from './autofood';

@NgModule({
  declarations: [
    AutofoodPage,
  ],
  imports: [
    IonicPageModule.forChild(AutofoodPage),
  ],
})
export class AutofoodPageModule {}
