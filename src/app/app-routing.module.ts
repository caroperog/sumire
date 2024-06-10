import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"login",component:LoginComponent, pathMatch:"full"},
  {path:"menu",component:MenuComponent, pathMatch:"full"},
  {path:"nosotros",component:NosotrosComponent, pathMatch:"full"},
  {path:"registro",component:RegistroComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
