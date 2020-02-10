import { Component, OnInit } from '@angular/core';
import { EntidadService } from 'src/app/services/entidad.service';
import { EntidadModel } from 'src/app/models/entidad.model';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styles: []
})
export class EntidadComponent implements OnInit {

  entidades: EntidadModel[] = [];

  constructor(private service:EntidadService) { }

  ngOnInit() {
  }

  obtenerTodas(){
    this.service.obtenerEntidades().subscribe(data => {
      if(data !== undefined){
        console.log(data);
        //this.entidades = data;
      }
    })
  }

}
