import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AlfajoresComponent } from './componentes/alfajores/alfajores.component';
import { BrowniesComponent } from './componentes/brownies/brownies.component';
import { TortasComponent } from './componentes/tortas/tortas.component';
import { FresasComponent } from './componentes/fresas/fresas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ZonaprivadaComponent } from './componentes/zonaprivada/zonaprivada.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    CarruselComponent,
    DashboardComponent,
    ProductosComponent,
    AlfajoresComponent,
    BrowniesComponent,
    TortasComponent,
    FresasComponent,
    UsuariosComponent,
    ZonaprivadaComponent,
    CategoriasComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
