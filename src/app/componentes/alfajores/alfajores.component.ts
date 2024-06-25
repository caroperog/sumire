import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any

@Component({
  selector: 'app-alfajores',
  templateUrl: './alfajores.component.html',
  styleUrls: ['./alfajores.component.css']
})
export class AlfajoresComponent {

  ngOnInit(): void {
    this.CargarTodas()
  }

  constructor(private peticion:PeticionService) {}

  datos:any[] = []

  AbrirModal(){
    $('#Modalnuevo').modal('show')
  }

  CargarTodas(){

    let post = {
      Host: this.peticion.urlHost,
      path: "/productos/list",
      payload:{}
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.datos = res.data
      }
    )
  
  
  
  }


}
