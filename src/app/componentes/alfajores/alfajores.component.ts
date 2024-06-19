import { Component } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

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

  cod_prod: string = ""
  nombre: string = ""
  estado: number = 1
  datos:any[] = []
  Idseleccionado:string = ""


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

AbrirModal(){
  this.cod_prod = ""
  this.nombre = ""
  this.estado = 1
  this.Idseleccionado = ""
  $('#Modalnuevo').modal('show')
}

Guardar(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/save",
    payload:{
      cod_prod:this.cod_prod,
      nombre:this.nombre,
      estado:this.estado
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {

        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });
        $('#Modalnuevo').modal('hide')
        this.CargarTodas()
      }
      else {

        Swal.fire({
          icon: "error",
          title: "Ouch!",
          text: res.mensaje,
        });
      }
      
    }
  )



}

EditarId(id:string) {
  this.Idseleccionado = id

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/listId",
    payload:{
      _id:id
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.cod_prod = res.data [0]. cod_prod
      this.nombre = res.data [0]. nombre
      this.estado = res.data [0]. estado
      $('#Modalnuevo').modal('show')
    }
  )
}

Eliminar() {
  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/delete",
    payload:{
      _id:this.Idseleccionado
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });
        $('#Modalnuevo').modal('hide')
        this.CargarTodas()
      }
      else {

        Swal.fire({
          icon: "error",
          title: "Ouch!",
          text: res.mensaje,
        });
      }
      
    }
  )
}

Actualizar(){

  let post = {
    Host: this.peticion.urlHost,
    path: "/productos/update",
    payload:{
      _id: this.Idseleccionado,
      cod_prod:this.cod_prod,
      nombre:this.nombre,
      estado:this.estado
    }
  }

  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true) {
        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });
        $('#Modalnuevo').modal('hide')
        this.CargarTodas()
      }
      else {

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
