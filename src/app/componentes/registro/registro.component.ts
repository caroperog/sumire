import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

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


}
