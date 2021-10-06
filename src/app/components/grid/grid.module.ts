import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GridComponent } from "./grid.component";
import { FiltroBuscaPipe } from "src/app/pipes/filtro-busca.pipe";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        GridComponent
    ],
    declarations: [
        GridComponent, 
        FiltroBuscaPipe
    ],
    providers: [],
 })
 
 export class GridModule {
 }