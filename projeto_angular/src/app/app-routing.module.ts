import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficosComponent } from './components/graficos/graficos.component';
import { HomeComponent } from './components/navegacao/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/navegacao/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
