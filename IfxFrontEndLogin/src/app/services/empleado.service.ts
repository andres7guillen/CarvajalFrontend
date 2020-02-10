import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmpleadoModel } from '../models/empleado.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url:string = "https://localhost:44373/api/Empleado/";
  private headers = new HttpHeaders({
    'Content-type': 'application/json' ,
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});

  constructor(private http:HttpClient) { }

  crearEmpleado(empleado:EmpleadoModel){
    return this.http.post(this.url + "Crear",JSON.stringify(empleado),{headers: this.headers});
  }

  actualizarEmpleado(empleado:EmpleadoModel){
    return this.http.put(this.url + "Actualizar",JSON.stringify(empleado),{headers: this.headers})
  }

  obtenerEmpleados(){
    return this.http.get(this.url + 'ObtenerTodos')
    .pipe(
      map(this.crearArreglo)
    );
  }

  obtenerEmpleadoPorId(id:string){
    return this.http.get(this.url + 'ObtenerPorId?IdEmpleado='  + id);
  }

  borrarEmpleado(id:string){
    return this.http.delete(this.url + 'Delete?EmpleadoId=' + id,{headers: this.headers});
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
