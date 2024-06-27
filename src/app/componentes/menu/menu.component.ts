import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';
/* import { ActivatedRoute, Params} from "@angular/router" */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    this.CargarTodas()
    
  }
 
  product:any= '{"ok":true,"product":[{"id":"667a29361f00b0ac9ba2d3fe","name":"Alfajor de cafe","price":5000,"description":"Es un alfajor relleno de crema de cafe y pepitas de choclo","filter":"alfajores","v":0,"image":"/assets/Alfajores/Alfajor-0.jpeg","state":true},{"_id":"667a2b8e5f7a976327edc4b1","name":"Alfajor de chocolate","price":5000,"description":"Es un alfajor relleno de crema de cchocolate","filter":"alfajores","v":0,"state":true,"image":"/assets/Alfajores/Alfajor-1.jpeg"},{"_id":"667a2cc15f7a976327edc4b6","name":"Alfajor de chocolate","price":5000,"description":"Es un alfajor relleno de crema de cchocolate","filter":"alfajores","v":0,"state":false,"image":"/assets/Alfajores/Alfajor-2.jpeg"},{"_id":"667a2cee5f7a976327edc4b8","name":"Fresas con chocolate","price":7000,"description":"Fresas cubiertas con chocolate","filter":"fresas","v":0,"state":true,"image":"/assets/Alfajores/Alfajor-4.jpeg"},{"_id":"667a2d095f7a976327edc4ba","name":"Fresas con crema","price":6000,"description":"Fresas con crema y queso","filter":"fresas","v":0,"state":true,"image":"/assets/Fresas/Fresas-0.jpeg"},{"_id":"667a2d285f7a976327edc4bc","name":"Fresas con durazno y banano","price":9000,"description":"Fresas con crema combinado con banano y durazno","filter":"fresas","v":0,"state":true,"image":"/assets/Fresas/Fresas-1.jpeg"},{"_id":"667a2d615f7a976327edc4be","name":"Alfajor blanco","price":6000,"description":"Alfajor cubierto con chocolate blanco relleno de arequipe","filter":"alfajores","v":0,"state":true,"image":"/assets/Alfajores/Alfajor-3.jpeg"},{"_id":"667a2d8b5f7a976327edc4c0","name":"Brownie de arequipe","price":6000,"description":"Brownie cubierto con chocolate relleno de arequipe","filter":"brownies","v":0,"state":true,"image":"/assets/Brownies/Browni-3.jpeg"},{"_id":"667a2da45f7a976327edc4c2","name":"Brownie de arequipe y alemdra","price":7000,"description":"Brownie cubierto con chocolate relleno de arequipe con almendra laminada","filter":"brownies","v":0,"state":true,"image":"/assets/Brownies/Browni-0.jpeg"},{"_id":"667a2dce5f7a976327edc4c4","name":"Brownie chocolate blanco","price":6500,"description":"Brownie cubierto con chocolate blanco relleno de arequipe","filter":"brownies","v":0,"state":true,"image":"/assets/Brownies/Browni-1.jpeg"},{"_id":"667a2e1d5f7a976327edc4c6","name":"Torta de zanahoria","price":6000,"description":"Torta de zanahoria cubierta de queso crema","filter":"tortas","v":0,"state":true,"image":"/assets/Tortas/Torta-0.jpeg"},{"_id":"667a2e565f7a976327edc4c8","name":"Torta envinada","price":6500,"description":"Torta casera bañada en vino","filter":"tortas","v":0,"state":true,"image":"/assets/Tortas/Torta-1.jpeg"},{"_id":"667a2e935f7a976327edc4ca","name":"Torta red velvet","price":6500,"description":"Torta roja con cacao y vainilla","filter":"tortas","_v":0,"state":true,"image":"/assets/Tortas/Torta-2.jpeg"}]}'
  productos:any=JSON.parse(this.product).product
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
    ).catch(error => console.log(error))
  }

}


