import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OralRoutingModule } from './oral-routing.module';
import { OralComponent } from './oral.component';


@NgModule({
  declarations: [OralComponent],
  imports: [
    CommonModule,
    OralRoutingModule
  ]
})
export class OralModule { }
