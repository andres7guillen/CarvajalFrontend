import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styles: []
})
export class EmpleadoEditarComponent implements OnInit {

  listado:any;
  id:string;
  empleado:any;
  constructor(private entidadService:EntidadService,
              private route:ActivatedRoute,
              private empleadoService:EmpleadoService,
              private router:Router) { }

  ngOnInit() {
    this.entidadService.obtenerEntidades().subscribe(data => {      
      this.listado = data;
      this.obtenerPorId();
    });
      this.id = this.route.snapshot.paramMap.get('id');
  }

  obtenerPorId(){
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe((data) => {
      if(data !== undefined){
        this.empleado = data;
      }
    })
  }

  actualizarEmpleado(f:NgForm)
  {
    if(f.valid)
    {
      Swal.fire({
        title:'Cargando',
        text:'espere por favor'
      });
      Swal.showLoading();
        this.empleadoService.actualizarEmpleado(this.empleado).subscribe((data)=>{
          if(data !== undefined){
            Swal.close();
            Swal.fire({
              title:'Correcto',
              text:'Empleado actualizado',
              allowOutsideClick: false
            })
              this.router.navigateByUrl('empleados');
          }else{
            Swal.close();
            Swal.fire({
              title:'error',
              text:'No se pudo actualizar'
            })
          }
        },(error)=>{
          Swal.close();
          Swal.fire({
            title:'error',
            text:error.error            
          })
        })
    }

  }

}
