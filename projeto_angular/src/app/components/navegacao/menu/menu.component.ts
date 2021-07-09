import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Menu } from "../models/menu";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
 

export class MenuComponent implements OnInit {

  menu: Menu = new Menu();
  
constructor(private data: DataService) {}

    ngOnInit(){      
       this.data.currentMessage.subscribe( menu => this.menu = menu);
    }


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
          descricao: "Gráficos",
          icone: "bi bi-file-bar-graph",
          rota: "/graficos"
        },        
        {
          descricao: "Configuração",
          icone: "bi bi-gear-fill",
          rota: "/configuracao"
        }
      ]
}