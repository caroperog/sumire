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

  constructor(private peticion: PeticionService) {


  }

  ngOnInit(): void {
    
  }

nombre:string = ""
email:string = ""
password:string = ""
datos:any[] = []

registrar(){

  



  console.log(this.nombre)
  console.log(this.password)
  console.log(this.email)

  this.datos.push({nombre:this.nombre, email:this.email})
  console.log(this.datos)

}


  departamentos: string[] = [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá',
    'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare',
    'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo',
    'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima', 
    'Valle del Cauca', 'Vaupés', 'Vichada'
  ];

  selectedDepartamento: string = '';

  
  constructor(private peticion:PeticionService){}

  Identificacion: number = 1
  Nombre: String = ""
  Sexo: String = ""
  Email: String = ""
  Password: String = ""
  Direccion: String = ""
  Telefono: Number = 1
  Ciudad: String = ""
  Departamento: String = ""
  Estado: Number = 1



Guardar(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/usuarios/save",
    payload:{
      Identificacion: this.Identificacion,
      Nombre: this.Nombre,
      Sexo: this.Sexo,
      Email: this.Email,
      Password: this.Password,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      Ciudad: this.Ciudad,
      Departamento: this.Departamento,
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