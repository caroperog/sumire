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
 
  productos:any=[]
  producto:any={}

  filtro:string= ""
  constructor(private route:ActivatedRoute,private peticion:PeticionService){
    this.route.params.subscribe(params => this.filtro= params["id"])
  }

  CargarTodas(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/productos/list"
      
    }

    this.peticion.Post(post.Host+post.path,{}).then(
      (res:any) => {
        this.productos=res.data
        console.log(res)
      }
    ).catch(error => console.log(error))
  }

}


