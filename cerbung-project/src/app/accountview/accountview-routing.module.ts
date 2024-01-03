import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountviewPage } from './accountview.page';

const routes: Routes = [
  {
    path: '',
    component: AccountviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountviewPageRoutingModule {}
