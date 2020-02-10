import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styles: []
})
export class EmpleadoDetalleComponent implements OnInit {

  id:string;
  empleado:any;

  constructor(private route:ActivatedRoute,
    private empleadoService:EmpleadoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerEmpleadoPorId();
  }

  obtenerEmpleadoPorId(){
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe((data)=>{
      if(data !== undefined){
        this.empleado = data;
        console.log(data);
      }
    })
  }

}
