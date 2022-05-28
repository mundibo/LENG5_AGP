import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconocimientoPageRoutingModule } from './reconocimiento-routing.module';

import { ReconocimientoPage } from './reconocimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconocimientoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReconocimientoPage]
})
export class ReconocimientoPageModule {}
