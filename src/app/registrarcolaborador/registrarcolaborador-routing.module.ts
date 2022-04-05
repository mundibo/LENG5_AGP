import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarcolaboradorPage } from './registrarcolaborador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarcolaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarcolaboradorPageRoutingModule {}
