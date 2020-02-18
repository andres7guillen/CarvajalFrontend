import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { Router } from '@angular/router';
import { EntidadModel } from 'src/app/models/entidad.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entidad-crear',
  templateUrl: './entidad-crear.component.html'  
})
export class EntidadCrearComponent implements OnInit {
  entidad:EntidadModel;


  constructor(private service:EntidadService,
              private router:Router) { }

  ngOnInit() {
    this.entidad = new EntidadModel();
  }

  guardar(f:NgForm){
    if(f.valid){
      this.service.crearEntidad(this.entidad).subscribe((data) => {
        if(data != undefined){
          Swal.fire({
            title:'Info',
            text:'Entidad creada',
            allowOutsideClick: false
          });
          this.router.navigateByUrl('entidadListar');
        }
      })
    }
  }

}
