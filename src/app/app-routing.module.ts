import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AlfajoresComponent } from './componentes/alfajores/alfajores.component';
import { BrowniesComponent } from './componentes/brownies/brownies.component';
import { FresasComponent } from './componentes/fresas/fresas.component';
import { TortasComponent } from './componentes/tortas/tortas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ZonaprivadaComponent } from './componentes/zonaprivada/zonaprivada.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ActivarComponent } from './componentes/activar/activar.component';
import { ActualizardatosuserComponent } from './componentes/actualizardatosuser/actualizardatosuser.component';





const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"login",component:LoginComponent, pathMatch:"full"},
  {path:"menu/:id",component:MenuComponent,pathMatch:"full"},
  {path:"nosotros",component:NosotrosComponent, pathMatch:"full"},
  {path:"registro",component:RegistroComponent, pathMatch:"full"},
  {path:"contacto",component:ContactoComponent, pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent, pathMatch:"full"},
  {path:"productos",component:ProductosComponent, pathMatch:"full"},
  {path:"alfajores",component:AlfajoresComponent, pathMatch:"full"},
  {path:"brownies",component:BrowniesComponent, pathMatch:"full"},
  {path:"fresas",component:FresasComponent, pathMatch:"full"},
  {path:"tortas",component:TortasComponent, pathMatch:"full"},
  {path:"usuarios",component:UsuariosComponent, pathMatch:"full"},
  {path:"zonaprivada",component:ZonaprivadaComponent, pathMatch:"full"},
  {path:"categorias",component:CategoriasComponent, pathMatch:"full"},
  {path:"activar",component:ActivarComponent, pathMatch:"full"},
  {path:"actualizardatosuser",component:ActualizardatosuserComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
