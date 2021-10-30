import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicuentaComponent } from './micuenta.component';

const routes: Routes = [{ path: '', component: MicuentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicuentaRoutingModule { }
