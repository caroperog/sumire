import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log(this.Email, this.Password)
    this.authService.login(this.Email, this.Password).subscribe(
      (response) => {
        console.log('Bienvenido!', response)
        if (response.state) { // Guardar el token en localStorage
          localStorage.setItem("datousuario", JSON.stringify(response.data));
          // Redirigir a la zona privada
          this.router.navigate(['zonaprivusuarios']);
        }else{  Swal.fire({
          icon: "error",
          title: "Ouch!",
          text: response.mensaje,
        });       }
       
      },
      (error) => {
        console.error('Login failed', error);
        // Manejo de errores
        alert('Login failed: ' + error.message);
      }
    );
  }
}
      



  
        