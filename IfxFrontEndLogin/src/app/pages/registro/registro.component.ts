import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() { 
    this.usuario = new Usuario();
  }

  onSubmit(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.authService.CrearUsuario(this.usuario).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al crear usuario',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }
    
  }


}
