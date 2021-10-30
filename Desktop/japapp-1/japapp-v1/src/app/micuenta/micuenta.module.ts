import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicuentaRoutingModule } from './micuenta-routing.module';
import { MicuentaComponent } from './micuenta.component';


@NgModule({
  declarations: [MicuentaComponent],
  imports: [
    CommonModule,
    MicuentaRoutingModule
  ]
})
export class MicuentaModule { }
