import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountviewPageRoutingModule } from './accountview-routing.module';

import { AccountviewPage } from './accountview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountviewPageRoutingModule
  ],
  declarations: [AccountviewPage]
})
export class AccountviewPageModule {}
