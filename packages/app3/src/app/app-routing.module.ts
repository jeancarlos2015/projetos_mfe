import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:"app3",
    component: HomeComponent
  },
  {
    path:"app3/apresentacao",
    component: ApresentacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
