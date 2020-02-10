import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntidadModel } from '../models/entidad.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json' ,
    "Authorization": "Bearer " + localStorage.getItem('token').toString() 
});
  constructor(private http:HttpClient) { }
  private URL:string = 'https://localhost:44373/api/Entidad/';


  obtenerEntidades(){    
    return this.http.get(this.URL + 'ObtenerTodas',{headers: this.headers})
    .pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(entidadesObj:object){
    const entidades : EntidadModel[] = [];
    Object.keys(entidadesObj).forEach(key => {
      const entidad:EntidadModel = entidadesObj[key];
      // entidad.id = key;
      entidades.push(entidad);
    }); 
    return entidades;  
  }


}
