import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
import Swal, { SweetAlertResult } from 'sweetalert2';

var $:any

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticion: PeticionService) {}


  ngOnInit(): void {}

  Identificacion: number = 1
  Nombre: String = ""
  Sexo: String = ""
  Email: String = ""
  Password: String = ""
  Telefono: Number = 1
  Estado: Number = 0


Registrar(){
  let post = {
    Host:this.peticion.urlHost,
    path:"/usuarios/save",
    payload:{
      Identificacion: this.Identificacion,
      Nombre: this.Nombre,
      Sexo: this.Sexo,
      Email: this.Email,
      Password: this.Password,
      Telefono: this.Telefono,
      Estado: this.Estado
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que bien!",
          text: res.mensaje,
        }).then((result: SweetAlertResult) => {
          if (result.isConfirmed) {
            location.replace("login")
            
          }
        } 
            );
        

        $('#modalnuevo').modal('hide')
      // this.CargarTodas()
    } else {
      Swal.fire({
        icon: "error",
        title: "Ouch!",
        text: res.mensaje,
      });
    }
    }
  )
}


}
