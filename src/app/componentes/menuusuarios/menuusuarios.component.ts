import { Component } from '@angular/core';
declare var Swal:any
var NombreUser:any;

@Component({
  selector: 'app-menuusuarios',
  templateUrl: './menuusuarios.component.html',
  styleUrls: ['./menuusuarios.component.css']
})



export class MenuusuariosComponent {
  RutaImagen: string = ""

  ngOnInit(): void {
    this.mensajeBienvenida()
    this.fotoUser()
  }

fotoUser() {
  console.log("montaña")
  debugger
  var retorno
  switch (NombreUser[0].Sexo){
    case 'Masculino': retorno = "/assets/avatarHombre.png"
    break;
    case 'Femenino': retorno = "/assets/avatarFemenino.png" 
    break;
    case 'N/A': retorno = "/assets/avatarNA.jpg"
    break
  }
  
  this.RutaImagen = retorno != null ? retorno: ""

  
}  




mensajeBienvenida(){
  var Nombre = localStorage.getItem('datousuario')
  if (Nombre) {
   NombreUser = JSON.parse(Nombre); 
  Swal.fire({
    icon: "success",
    title: "Que bien!",
    text: "Bienvenido " + (NombreUser != null ?NombreUser[0].Nombre:"" ) + "!" 
  });
  }
}


cerrarSesion() {
  sessionStorage.clear();  // Limpiar sessionStorage
  localStorage.clear();    // Limpiar localStorage

  window.location.href = 'login';
}

}
