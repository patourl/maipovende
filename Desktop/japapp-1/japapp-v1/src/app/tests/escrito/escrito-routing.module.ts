import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscritoComponent } from './escrito.component';

const routes: Routes = [{ path: '', component: EscritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscritoRoutingModule { }
