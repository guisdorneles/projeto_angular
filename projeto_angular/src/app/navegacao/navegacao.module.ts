import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        HomeComponent, 
        FooterComponent,
        NotFoundComponent
    ]
})   

export class NavegacaoModule {}