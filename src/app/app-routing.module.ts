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



const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"login",component:LoginComponent, pathMatch:"full"},
  {path:"menu",component:MenuComponent, pathMatch:"full"},
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
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
