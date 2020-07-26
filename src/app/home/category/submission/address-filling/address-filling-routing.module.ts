import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressFillingPage } from './address-filling.page';

const routes: Routes = [
  {
    path: '',
    component: AddressFillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressFillingPageRoutingModule {}
