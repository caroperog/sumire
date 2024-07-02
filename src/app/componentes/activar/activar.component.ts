import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-activar',
  templateUrl: './activar.component.html',
  styleUrls: ['./activar.component.css']
})
export class ActivarComponent implements OnInit {

  Email:string = ""
  Codigo:string = ""

  constructor(private actroute: ActivatedRoute, private peticion: PeticionService) {}

  ngOnInit(): void {
    this.Email = this.actroute.snapshot.params["correo"]
    this.Codigo = this.actroute.snapshot.params["codigo"]
  }

  Activar() {

    let post = {
      Host: this.peticion.urlHost,
      path: "/usuarios/activar",
      payload:{
        Email: this.Email,
        codigoact: this.Codigo

      }
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        
      }
    )

  }

}
