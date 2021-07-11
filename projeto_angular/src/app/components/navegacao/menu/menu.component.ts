import { Component, OnInit } from "@angular/core";
import { DataServiceMenu } from "src/app/shared/services/data.service.menu";
import { Menu } from "../../../shared/models/menu/menu";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
 

export class MenuComponent implements OnInit {

  menu: Menu = new Menu();
  
constructor(private data: DataServiceMenu) {}

    ngOnInit(){      
       this.data.currentMessage.subscribe( menu => this.menu = menu);
    }


    itemMenuActive: boolean = false;
    activeScrollY: boolean = true;
    listaItemMenu:any[] = [
        {
          descricao: "Início",
          icone: "bi bi-house-door-fill",
          rota: "/home",
          habilitado: true
        },
        {
          descricao: "Usuário",
          icone: "bi bi-people-fill",
          rota: "/usuario",
          habilitado: true
        },
        {
          descricao: "Relatórios",
          icone: "bi bi-file-earmark-bar-graph-fill",
          rota: "/relatorio",
          habilitado: true
        },
        {
          descricao: "Gráficos",
          icone: "bi bi-file-bar-graph",
          rota: "/graficos",
          habilitado: true
        },        
        {
          descricao: "Configuração",
          icone: "bi bi-gear-fill",
          rota: "/configuracao",
          habilitado: false
        }
      ]
}