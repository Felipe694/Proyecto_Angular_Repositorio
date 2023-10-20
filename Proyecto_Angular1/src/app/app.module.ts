import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes=[
  {path:'inicio', component:InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'tabla', component:TablaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    MenuComponent,
    TablaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTabsModule,
    MatMenuModule,
    
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    
    MatTableModule// Asegúrate de incluir el módulo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
