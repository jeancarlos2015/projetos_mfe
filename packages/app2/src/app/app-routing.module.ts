import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginaApresentacaoComponent } from './components/pagina-apresentacao/pagina-apresentacao.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [

  {
    path:"app2",
    component: HomeComponent,
    children:[
      {
        path:"apresentacao",
        component: PaginaApresentacaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
