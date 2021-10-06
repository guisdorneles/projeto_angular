import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './components/navegacao/graficos/graficos.component';
import { HomeComponent } from './components/navegacao/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TabelaComponent } from './components/navegacao/tabela/tabela.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: 'tabelas', component: TabelaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
