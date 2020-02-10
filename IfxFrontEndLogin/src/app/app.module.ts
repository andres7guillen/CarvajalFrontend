import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';

import { EntidadComponent } from './components/entidad/entidad.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RolUsuarioComponent } from './components/rol-usuario/rol-usuario.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoEditarComponent } from './components/empleado-editar/empleado-editar.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { EmpleadoCrearComponent } from './components/empleado-crear/empleado-crear.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,    
    EntidadComponent,
    UsuarioComponent,
    RolUsuarioComponent,
    EmpleadosComponent,
    EmpleadoEditarComponent,
    EmpleadoDetalleComponent,
    EmpleadoCrearComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
