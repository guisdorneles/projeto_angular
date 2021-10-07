import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

    
  constructor(private gridService: GridService) {
    gridService = new GridService();  
  }

ngOnInit(): void {
    this.exibirFonteDados();
}

dadosCliente: any;
dataSource : any = {
        "texto_placeholder": "Pesquisar por nome",
        "colunas_pesquisaveis": ["nome", "municipio"],
        "colunas" : ["Nome", "Endereço", "Município", "Estado", "Telefone"],
        "dataSet" : [
            {
                "nome" : "Guilherme",
                "endereco" : "Rua do Bosque, 236",
                "municipio" : "Santo André",
                "estado" : "São Paulo",
                "telefone" : "4444-4444"
            },
            {
                "nome" : "Kelly",
                "endereco" : "Av dos Estados, 1250",
                "municipio" : "Salto",
                "estado" : "São Paulo",
                "telefone" : "4444-5555"
            },
            {
                "nome" : "Elisia",
                "endereco" : "Av dos Estados, 12512",
                "municipio" : "Caldas Novas",
                "estado" : "Goiás",
                "telefone" : "4444-9999"
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
