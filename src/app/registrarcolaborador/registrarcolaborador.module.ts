import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarcolaboradorPageRoutingModule } from './registrarcolaborador-routing.module';

import { RegistrarcolaboradorPage } from './registrarcolaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarcolaboradorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarcolaboradorPage]
})
export class RegistrarcolaboradorPageModule {}
