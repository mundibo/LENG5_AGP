import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarvalorPageRoutingModule } from './registrarvalor-routing.module';

import { RegistrarvalorPage } from './registrarvalor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarvalorPageRoutingModule
  ],
  declarations: [RegistrarvalorPage]
})
export class RegistrarvalorPageModule {}
