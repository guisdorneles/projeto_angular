import { Component, Input, OnInit } from "@angular/core";
import { Menu } from "../../../shared/models/menu/menu";
import { DataServiceMenu } from "src/app/shared/services/data.service.menu";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    menu: Menu = new Menu();
    expandeMenu: boolean;

    constructor(private data: DataServiceMenu) {
        data = new DataServiceMenu();
    }

    ngOnInit(): void { }

    expansiveMenu: boolean = false;  

    expandirMenu(expansive: boolean) {      
        this.expansiveMenu = !this.expansiveMenu;
        this.menu.isExpansive = this.expansiveMenu;       
        this.menu.isVisible = true;
        this.data.changeMessage(this.menu);   
    };


    imageUserIconPath: string = "./assets/imagens/icone-usuario.jpg";
    nomeUsuario: string = "Guilherme";
    imageExitIconPath: string = "./assets/imagens/exit-icon.png";

}



