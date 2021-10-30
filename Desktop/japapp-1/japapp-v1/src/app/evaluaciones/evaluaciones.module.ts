import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionesRoutingModule } from './evaluaciones-routing.module';
import { EvaluacionesComponent } from './evaluaciones.component';


@NgModule({
  declarations: [EvaluacionesComponent],
  imports: [
    CommonModule,
    EvaluacionesRoutingModule,
  ]
})
export class EvaluacionesModule { }
