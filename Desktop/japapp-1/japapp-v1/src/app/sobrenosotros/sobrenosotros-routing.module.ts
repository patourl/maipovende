import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrenosotrosComponent } from './sobrenosotros.component';

const routes: Routes = [{ path: '', component: SobrenosotrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobrenosotrosRoutingModule { }
