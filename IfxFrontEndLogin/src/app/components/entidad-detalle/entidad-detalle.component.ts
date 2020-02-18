import { Component, OnInit } from '@angular/core';
import { EntidadModel } from 'src/app/models/entidad.model';
import { EntidadService } from 'src/app/services/entidad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entidad-detalle',
  templateUrl: './entidad-detalle.component.html',
  styles: []
})
export class EntidadDetalleComponent implements OnInit {

entidad:any;
id:string = '';
  constructor(private service: EntidadService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerEntidadPorId();
  }

  obtenerEntidadPorId()
  {
    this.service.obtenerPorId(this.id).subscribe((data) => {
        if(data != undefined){
          this.entidad = data;
        }
    });

  }

}
