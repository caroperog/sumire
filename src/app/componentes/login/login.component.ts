import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/peticion.service';


declare var $:any
declare var Swal:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

  constructor(private peticion: PeticionService, private router: Router){}

  Email: string = ''
  Password: string = ''

  login(){

    var post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/login",
      payload: {
        Email:this.Email,
        Password:this.Password
      }
    }

    this.peticion.Post(post.Host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        Swal.fire({
          title: "Bienvenido!",
          text: res.mensaje,
          icon: "success"
        });

        this.router.navigate(["dashboard"])

      }
      else{
        Swal.fire({
          title: "Ouch!",
          text: res.mensaje,
          icon: "error"
        });

      }
    })


  }
}
      



  
        