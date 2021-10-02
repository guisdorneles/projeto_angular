import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ChartsModule } from 'ng2-charts';
import { GraficosComponent } from "../graficos/graficos.component";
import { LoginComponent } from "../login/login.component";
import { GridModule } from "../grid/grid.module";  
import { VisualizarDadosModule } from "../visualizar-dados/visualizar-dados.module";


@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        GraficosComponent,
        NotFoundComponent,
        LoginComponent,
         
    ],
    imports: [
        CommonModule,
        RouterModule,
        ChartsModule,
        GridModule,
        VisualizarDadosModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        GraficosComponent,
        NotFoundComponent,
        LoginComponent
    ]
})   

export class NavegacaoModule {}