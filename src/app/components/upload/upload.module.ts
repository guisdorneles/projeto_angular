import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { UploadComponent } from "./upload.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UploadComponent
    ],
    declarations: [
        UploadComponent, 
    ],
    providers: [],
 })
 
 export class UploadModule {
 }