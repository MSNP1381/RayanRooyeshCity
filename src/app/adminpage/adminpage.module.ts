import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpagePageRoutingModule } from './adminpage-routing.module';

import { AdminpagePage } from './adminpage.page';
import { Message2ComponentModule } from '../message2/message2.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpagePageRoutingModule,
    Message2ComponentModule
  ],
  declarations: [AdminpagePage]
})
export class AdminpagePageModule {}
