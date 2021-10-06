import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ChartsModule } from 'ng2-charts';
import { GraficosComponent } from "./graficos/graficos.component";
import { GridModule } from "../grid/grid.module"; 
import { TabelaComponent } from "./tabela/tabela.component";


@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        GraficosComponent,        
        TabelaComponent 
    ],
    imports: [
        CommonModule,
        RouterModule,
        ChartsModule,
        GridModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        GraficosComponent,
        TabelaComponent
    ]
})   

export class NavegacaoModule {}