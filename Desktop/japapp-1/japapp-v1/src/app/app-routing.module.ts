import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/home',  pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'evaluaciones', loadChildren: () => import('./evaluaciones/evaluaciones.module').then(m => m.EvaluacionesModule) },
  { path: 'oral', loadChildren: () => import('./tests/oral/oral.module').then(m => m.OralModule) },
  { path: 'escrito', loadChildren: () => import('./tests/escrito/escrito.module').then(m => m.EscritoModule) },
  { path: 'donaciones', loadChildren: () => import('./donaciones/donaciones.module').then(m => m.DonacionesModule) },
  { path: 'sobrenosotros', loadChildren: () => import('./sobrenosotros/sobrenosotros.module').then(m => m.SobrenosotrosModule) },
  { path: 'consultas', loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule) },
  { path: 'micuenta', loadChildren: () => import('./micuenta/micuenta.module').then(m => m.MicuentaModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
