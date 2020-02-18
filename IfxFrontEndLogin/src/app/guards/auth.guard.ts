import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,
              private router:Router){}

  canActivate():  boolean {
    console.log('Block by guard');
    if(this.auth.estaAutenticado()){
      return true;
    }else{
      Swal.fire({title:'Info',
                text:'No se ha logueado',
                allowOutsideClick: false
    })
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
