import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmissionPage } from './submission.page';

const routes: Routes = [
  {
    path: '',
    component: SubmissionPage
  },
  {
    path: 'receipt',
    loadChildren: () => import('./receipt/receipt.module').then( m => m.ReceiptPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionPageRoutingModule {}
