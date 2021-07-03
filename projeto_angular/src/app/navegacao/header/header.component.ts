import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor() {}
    ngOnInit(): void { }

    imageUserIconPath: string = "./assets/imagens/icone-usuario.jpg";
    nomeUsuario: string = "Guilherme";
    imageExitIconPath: string = "./assets/imagens/exit-icon.png";

}

