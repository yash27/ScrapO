import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./addresses/addresses.module').then( m => m.AddressesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
