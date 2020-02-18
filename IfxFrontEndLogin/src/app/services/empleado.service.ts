import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpleadoModel } from '../models/empleado.model';
import { map } from 'rxjs/operators';
import { Connections } from './ConnectionService';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  
  private headers = new HttpHeaders({
    'Content-type': 'application/json' ,
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});

  constructor(private http:HttpClient,
              private conn:Connections) { }

  crearEmpleado(empleado:EmpleadoModel){
    return this.http.post(this.conn.urlEmpleado + "Crear",JSON.stringify(empleado),{headers: this.headers});
  }

  actualizarEmpleado(empleado:EmpleadoModel){
    return this.http.put(this.conn.urlEmpleado + "Actualizar",JSON.stringify(empleado),{headers: this.headers})
  }

  obtenerEmpleados(){
    return this.http.get(this.conn.urlEmpleado + 'ObtenerTodos')
    .pipe(
      map(this.crearArreglo)
    );
  }

  obtenerEmpleadoPorId(id:string){
    return this.http.get(this.conn.urlEmpleado + 'ObtenerPorId?IdEmpleado='  + id);
  }

  borrarEmpleado(id:string){
    return this.http.delete(this.conn.urlEmpleado + 'Delete?EmpleadoId=' + id,{headers: this.headers});
  }

  private crearArreglo(empleadosObj:object){
    const empleados : EmpleadoModel[] = [];
    Object.keys(empleadosObj).forEach(key => {
      const entidad:EmpleadoModel = empleadosObj[key];
      // entidad.id = key;
      empleados.push(entidad);
    }); 
    return empleados;  
  }


}
