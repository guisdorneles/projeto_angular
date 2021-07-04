import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
 

export class MenuComponent implements OnInit {

    constructor() {}
    ngOnInit(): void { }
    itemMenuActive: boolean = false;
    activeScrollY: boolean = true;
    listaMenu:any[] = [
        {
          descricao: "Início",
          icone: "bi bi-house-door-fill",
          rota: "/home"
        },
        {
          descricao: "Usuário",
          icone: "bi bi-people-fill",
          rota: "/usuario"
        },
        {
          descricao: "Relatórios",
          icone: "bi bi-file-earmark-bar-graph-fill",
          rota: "/relatorio"
        },
        {
          descricao: "Compras",
          icone: "bi bi-bag-check-fill",
          rota: "/compras"
        },
        {
          descricao: "Configuração",
          icone: "bi bi-gear-fill",
          rota: "/configuracao"
        }
      ]
}