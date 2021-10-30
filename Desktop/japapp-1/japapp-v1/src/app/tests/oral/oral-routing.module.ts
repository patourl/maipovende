import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OralComponent } from './oral.component';

const routes: Routes = [{ path: '', component: OralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OralRoutingModule { }
