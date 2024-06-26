import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/peticion.service';
import { Renderer2 } from '@angular/core';

declare var bootstrap: any;
declare var $:any
declare var Swal:any

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTodas()
    this.CargarTodasCategorias()
  }

  constructor(private peticion: PeticionService, private renderer: Renderer2){}

cod_cat:string = ""
cod_prod:string = ""
nombre:string = ""
precio: number = 1
estado:number = 1
datos:any[] = []
datoscategorias:any[] = []
idseleccionado:string = ""

CargarTodasCategorias(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/categorias/list",
    payload:{
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datoscategorias = res.data
    }
  )
}

CargarTodas(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/productos/list",
    payload:{
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datos = res.data
    }
  )
}

abrirModal(){
  this.cod_prod = ""
  this.nombre = ""
  this.estado = 1
  this.idseleccionado = ""
  const modalElement = this.renderer.selectRootElement('#modalnuevo', true);
  const modalInstance = new bootstrap.Modal(modalElement);
  modalInstance.show();
}


Guardar(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/productos/save",
    payload:{
     cod_cat:this.cod_cat,
     cod_prod:this.cod_prod,
     nombre:this.nombre,
     precio:this.precio,
     estado:this.estado
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
        });


        $('#modalnuevo').modal('hide')
      this.CargarTodas()
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

EditarId(id:string){
  this.idseleccionado = id
  let post = {
    Host:this.peticion.urlHost,
    path:"/productos/listid",
    payload:{
     _id:id
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.cod_cat = res.data[0].cod_cat
      this.cod_prod = res.data[0].cod_prod
      this.nombre = res.data[0].nombre
      this.precio = res.data[0].precio
      this.estado = res.data[0].estado
      const modalElement = this.renderer.selectRootElement('#modalnuevo', true);
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  )
}

Eliminar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/productos/delete",
      payload:{
       _id: this.idseleccionado
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
          });
          $('#modalnuevo').modal('hide')
        this.CargarTodas()
      }else{
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
      Host:this.peticion.urlHost,
      path:"/productos/update",
      payload:{
        _id:this.idseleccionado,
       cod_cat:this.cod_cat,
       cod_prod:this.cod_prod,
       nombre:this.nombre,
       precio:this.precio,
       estado:this.estado
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
          });
          $('#modalnuevo').modal('hide')
        this.CargarTodas()
      }else{
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