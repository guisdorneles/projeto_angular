import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
 

export class MenuComponent implements OnInit {

    constructor() {}
    ngOnInit(): void { }

    listaMenu:any[] = [
        {
          descricao: "Item_1",
          icone: "./assets/imagens/icone-usuario.jpg"
        },
        {
          descricao: "Item_2",
          icone: "./assets/imagens/icone-usuario.jpg"
        },
        {
          descricao: "Item_3",
          icone: "./assets/imagens/icone-usuario.jpg"
        },
        {
          descricao: "Item_4",
          icone: "./assets/imagens/icone-usuario.jpg"
        },
        {
          descricao: "Item_5",
          icone: "./assets/imagens/icone-usuario.jpg"
        }
      ]
}