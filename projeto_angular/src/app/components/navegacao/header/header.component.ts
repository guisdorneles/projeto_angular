import { Component, Input, OnInit } from "@angular/core";
import { BlockLike } from "typescript";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor() {}
    ngOnInit(): void { }
    @Input() expandMenu: boolean = false; 
    imageUserIconPath: string = "./assets/imagens/icone-usuario.jpg";
    nomeUsuario: string = "Guilherme";
    imageExitIconPath: string = "./assets/imagens/exit-icon.png";

}

