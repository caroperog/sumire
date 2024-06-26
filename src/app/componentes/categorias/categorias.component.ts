import { Component } from '@angular/core';
import { PeticionService } from 'src/app/peticion.service';
import { Renderer2 } from '@angular/core';


declare var bootstrap: any;
declare var $:any
declare var Swal:any

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  ngOnInit(): void {
    this.CargarTodas()
  }

  constructor(private peticion: PeticionService, private renderer: Renderer2){}



cod_cat:string = ""
nombre:string = ""
estado:number = 1
datos:any[] = []
idseleccionado:string = ""

CargarTodas(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/categorias/list",
    payload:{
     cod_cat:this.cod_cat,
     nombre:this.nombre,
     estado:this.estado
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

  this.cod_cat = ""
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
    path:"/categorias/save",
    payload:{
     cod_cat:this.cod_cat,
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
    path:"/categorias/listid",
    payload:{
     _id:id
    }
  }
  this.peticion.Post(post.Host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.cod_cat = res.data[0].cod_cat
      this.nombre = res.data[0].nombre
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
      path:"/categorias/delete",
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
      path:"/categorias/update",
      payload:{
        _id:this.idseleccionado,
       cod_cat:this.cod_cat,
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

