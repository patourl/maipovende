import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscritoRoutingModule } from './escrito-routing.module';
import { EscritoComponent } from './escrito.component';


@NgModule({
  declarations: [EscritoComponent],
  imports: [
    CommonModule,
    EscritoRoutingModule
  ]
})
export class EscritoModule { }
