import { EventEmitter, OnInit, Output } from "@angular/core";
import { Component } from "@angular/core";
import { GridService } from "src/app/shared/services/grid.service";
 
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    
    constructor(private gridService: GridService) {
        gridService = new GridService();  
      }
    
    ngOnInit(): void {
        this.exibirFonteDados();
    }

    dadosCliente: any;
    dataSource : any = {
            "texto_placeholder": "Pesquisar por nome",
            "cabecalho" : ["Nome", "Endereço", "Telefone"],
            "dataSet" : [
                {
                    "nome" : "Guilherme",
                    "endereco" : "Rua do Bosque, 236",
                    "telefone" : "4444-4444",
                    "url_foto" : "./assets/imagens/icone-usuario.jpg"
                },
                {
                    "nome" : "Kelly",
                    "endereco" : "Av dos Estados, 1250",
                    "telefone" : "4444-5555",
                    "url_foto" : "./assets/imagens/icone-usuario.jpg"
                },
                {
                    "nome" : "Elisia",
                    "endereco" : "Av dos Estados, 12512",
                    "telefone" : "4444-9999",
                    "url_foto" : "./assets/imagens/icone-usuario.jpg"
                }

            ]
        }    
        
        exibirDadosLinhaSelecionada(item: any): any {                 
            this.dadosCliente = item;        
        }

        exibirFonteDados() : void{ 
            this.gridService.msgExibeGrid(true);  
            this.gridService.msgDadosGrid(this.dataSource);  
        }
}