import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { GestionFacturaComponent } from './gestion-factura/gestion-factura.component';
import { TablaLotesComponent } from './tabla-lotes/tabla-lotes.component';
import { TablaSociosComponent } from './tabla-socios/tabla-socios.component';
import { GestionLoteComponent } from './gestion-lote/gestion-lote.component';
import { GestionSocioComponent } from './gestion-socio/gestion-socio.component';
import { TablaFacturaComponent } from './tabla-factura/tabla-factura.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'facturacion',
    component: GestionFacturaComponent
  },
  {
    path: 'lotes',
    component: TablaLotesComponent
  },
  {
    path: 'lote',
    component: GestionLoteComponent
  },
  {
    path: 'socios',
    component: TablaSociosComponent
  },
  {
    path: 'socio',
    component: GestionSocioComponent
  },
  {
    path: '',
    component: InicioComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'index',
    component: InicioComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'facturas',
    component: TablaFacturaComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }