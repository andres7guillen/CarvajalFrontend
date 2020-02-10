import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

import { EntidadComponent } from './components/entidad/entidad.component';
import { RolUsuarioComponent } from './components/rol-usuario/rol-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { EmpleadoEditarComponent } from './components/empleado-editar/empleado-editar.component';
import { EmpleadoCrearComponent } from './components/empleado-crear/empleado-crear.component';


const ROUTES: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'empleadoDetalle/:id', component:EmpleadoDetalleComponent, canActivate:[ AuthGuard ] },
  { path: 'empleadoEditar/:id', component:EmpleadoEditarComponent, canActivate:[ AuthGuard ] },
  { path: 'empleadoCrear', component:EmpleadoCrearComponent, canActivate:[ AuthGuard ] },
  { path: 'entidad/:id', component: EntidadComponent,canActivate:[ AuthGuard ] },
  { path: 'empleados', component: EmpleadosComponent,canActivate:[ AuthGuard ] },
  { path: 'rolUsuario', component: RolUsuarioComponent,canActivate:[ AuthGuard ]},
  { path: 'usuario', component:UsuarioComponent,canActivate:[ AuthGuard ]},
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });