import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { EntidadModel } from 'src/app/models/entidad.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EmpleadoModel } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  constructor(private entidadService:EntidadService,
              private empleadosService:EmpleadoService,
              private router:Router) { }

  listado: EmpleadoModel[] = [];

  ngOnInit() {
    this.empleadosService.obtenerEmpleados().subscribe(data => {
      if(data !== undefined){
        this.listado = data;
        console.log(this.listado);
      }
    })    
  }

  borrarEmpleado(empleado:EmpleadoModel, index:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + empleado.nombres + '?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.empleadosService.borrarEmpleado(empleado.id).subscribe(data => {
          if(data != undefined){
            this.empleadosService.obtenerEmpleados().subscribe(datad => {
              if(data !== undefined){
                this.listado = datad;
                console.log(this.listado);
              }
            });
            Swal.fire({
              title: 'Correcto',
              text: 'Empleado:  ' + empleado.nombres + ' borrado correctamente',
              allowOutsideClick: false
            });
            this.router.navigateByUrl('empleados');
          }
        })
      }
    })
    
  }

}
