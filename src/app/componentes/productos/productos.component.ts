import { Component, Host, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTodas()
    
  }

  productos:any=[]
  producto:any={}

  filtro:string= ""
  constructor(private route:ActivatedRoute,private peticion:PeticionService){
    this.route.params.subscribe(params => this.filtro= params["id"])
  }

  CargarTodas(){
    let get = {
      Host:"https://tzkfn81m-4000.brs.devtunnels.ms",
      path:"/productos"
      
    }

    this.peticion.Get(get.Host+get.path).then(
      (res:any) => {
        this.productos=res.product
        console.log(res)
      }
    )
  }

}
