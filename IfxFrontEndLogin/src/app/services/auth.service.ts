import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { Usuario } from '../models/usuario.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import { Connections } from './ConnectionService';
import { UsuarioRolModel } from '../models/usuario.rol.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = '';   
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});
  constructor(private http:HttpClient,
              private conn:Connections) { }
  
  
  Login(usuario:Usuario) {
    return this.http.post(this.conn.urlCuenta + '/Login', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }
   
  LogOut(){
    localStorage.removeItem('token');
  }
  
  CrearUsuario(usuario:Usuario) {
    return this.http.post(this.conn.urlCuenta + '/Crear', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }

  private guardarToken(token:string){
    this.userToken = token;
    localStorage.setItem('token',token);
  }

  leerToken():string{
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado():boolean {
    return this.userToken.length > 2;
  }

  asociarUsuarioRol(usuRol:UsuarioRolModel){
    return this.http.post(this.conn.urlUsuario + 'AsignarRolUsuario', JSON.stringify(usuRol),{headers: this.headers});
  }

  RemoverUsuarioRol(usuRol:UsuarioRolModel){
    return this.http.post(this.conn.urlUsuario + 'RemoverRolUsuario', JSON.stringify(usuRol),{headers:this.headers});
  }



}


