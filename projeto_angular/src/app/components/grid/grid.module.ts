import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GridComponent } from "./grid.component";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: 
    [
        CommonModule,
        FormsModule
    ],
    exports: [GridComponent],
    declarations: [
        GridComponent, 
        FilterPipe
    ],
    providers: [],
 })
 
 export class GridModule {
 }