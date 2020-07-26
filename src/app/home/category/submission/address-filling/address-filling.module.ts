import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressFillingPageRoutingModule } from './address-filling-routing.module';

import { AddressFillingPage } from './address-filling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressFillingPageRoutingModule
  ],
  declarations: [AddressFillingPage]
})
export class AddressFillingPageModule {}
