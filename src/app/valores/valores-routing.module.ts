import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoresPage } from './valores.page';

const routes: Routes = [
  {
    path: '',
    component: ValoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoresPageRoutingModule {}
