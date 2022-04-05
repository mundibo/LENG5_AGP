import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoresPageRoutingModule } from './valores-routing.module';

import { ValoresPage } from './valores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoresPageRoutingModule
  ],
  declarations: [ValoresPage]
})
export class ValoresPageModule {}
