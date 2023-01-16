import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaApresentacaoComponent } from './components/pagina-apresentacao/pagina-apresentacao.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ApresentacaoPrimariaComponent } from './components/apresentacao-primaria/apresentacao-primaria.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaApresentacaoComponent,
    HomeComponent,
    ApresentacaoPrimariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:  [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
