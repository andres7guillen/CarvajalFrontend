import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  constructor(private auth:AuthService,
              private router:Router) { }
              estaLogueado:boolean = true;

  ngOnInit() {
    this.estaLogueado = this.auth.estaAutenticado();
    console.log('esta logueado:',this.estaLogueado);
  }
  salir(){    
    this.auth.LogOut();
    this.auth.userToken = '';
    this.router.navigateByUrl('/login');
  }

}
