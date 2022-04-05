import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarreunionPageRoutingModule } from './registrarreunion-routing.module';

import { RegistrarreunionPage } from './registrarreunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarreunionPageRoutingModule
  ],
  declarations: [RegistrarreunionPage]
})
export class RegistrarreunionPageModule {}
