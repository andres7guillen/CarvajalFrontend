import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;  
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.email = 'andres07guillen@gmail.com';
    this.usuario.PassWord = 'Y0k0gaWA_1992'
  }

  

  onLogin(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'info',text:'espere por favor...',
                allowOutsideClick:false
    });
      Swal.showLoading();
      
      this.auth.Login(this.usuario).subscribe(data => {
        Swal.close();
        console.log(data);
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al autenticar',text:error.error });

        console.log(error.error);
      })
    }
  }

}
