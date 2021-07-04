import { Component, Input, OnInit } from "@angular/core";
import { Menu } from "../models/menu";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    menu: Menu = {
        isExpansive: false,
        isVisible: false
    };
    expandeMenu : boolean = false;
    constructor(private data: DataService) {
    }

    ngOnInit(): void { }

    expandirMenu(){
        this.data.changeMessage(
            this.menu = {
                isExpansive : true,
                isVisible : true
            }
        )        
    }
    imageUserIconPath: string = "./assets/imagens/icone-usuario.jpg";
    nomeUsuario: string = "Guilherme";
    imageExitIconPath: string = "./assets/imagens/exit-icon.png";

}



