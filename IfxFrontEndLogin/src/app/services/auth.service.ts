import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';
import { Usuario } from '../models/usuario.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = ''; 
  private url:string = 'https://localhost:44373/api/Cuenta';
  private headers = new HttpHeaders({
    'Content-type': 'application/json'    
});
  constructor(private http:HttpClient) { }
  
  
  Login(usuario:Usuario) {
    return this.http.post(this.url + '/Login', JSON.stringify(usuario),{headers: this.headers})
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
    return this.http.post(this.url + '/Crear', JSON.stringify(usuario),{headers: this.headers})
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



}


