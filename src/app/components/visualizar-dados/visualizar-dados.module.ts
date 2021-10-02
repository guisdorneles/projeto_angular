import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; 
import { FormsModule } from '@angular/forms';
import { VisualizarDadosComponent } from "./visualizar-dados.component";

@NgModule({
    imports: 
    [
        CommonModule,
        FormsModule
    ],
    exports: [
        VisualizarDadosComponent
    ],
    declarations: [
        VisualizarDadosComponent, 
    ],
    providers: [],
 })
 
 export class VisualizarDadosModule {
 }