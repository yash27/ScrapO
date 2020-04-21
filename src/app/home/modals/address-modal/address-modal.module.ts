import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressModalPageRoutingModule } from './address-modal-routing.module';

import { AddressModalPage } from './address-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddressModalPageRoutingModule
  ],
  declarations: [AddressModalPage]
})
export class AddressModalPageModule {}
