import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarreunionPage } from './registrarreunion.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarreunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarreunionPageRoutingModule {}
