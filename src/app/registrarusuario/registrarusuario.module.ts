import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarusuarioPageRoutingModule } from './registrarusuario-routing.module';

import { RegistrarusuarioPage } from './registrarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarusuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarusuarioPage]
})
export class RegistrarusuarioPageModule {}
