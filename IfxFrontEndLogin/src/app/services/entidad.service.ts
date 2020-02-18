import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntidadModel } from '../models/entidad.model';
import { map } from 'rxjs/operators';
import { Connections } from './ConnectionService';


@Injectable({
  providedIn: 'root'
})
export class EntidadService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json' ,
    "Authorization": "Bearer " + localStorage.getItem('token').toString() 
});
  constructor(private http:HttpClient,
              private conn:Connections) { }
  


  obtenerEntidades(){    
    return this.http.get(this.conn.urlEntidad + 'ObtenerTodas',{headers: this.headers})
    .pipe(
      map(this.crearArreglo)
    );
  }

  eliminarEntidad(EntidadId:string){    
    return this.http.delete(this.conn.urlEntidad + 'Eliminar?EntidadId=' + EntidadId,{headers: this.headers});
  }

  private crearArreglo(entidadesObj:object){
    const entidades : EntidadModel[] = [];
    Object.keys(entidadesObj).forEach(key => {
      const entidad:EntidadModel = entidadesObj[key];      
      entidades.push(entidad);
    }); 
    return entidades;  
  }

  crearEntidad(entidad:EntidadModel){
    return this.http.post(this.conn.urlEntidad + 'Crear' , JSON.stringify(entidad)   ,{headers: this.headers })
  }

  obtenerPorId(id:string){
    return this.http.get(this.conn.urlEntidad + 'ObtenerPorId?IdEntidad=' + id ,{headers: this.headers});
  }

  actualizarEntidad(entidad:EntidadModel){
    return this.http.put(this.conn.urlEntidad + 'Actualizar', JSON.stringify(entidad),{headers: this.headers});
  }


}
