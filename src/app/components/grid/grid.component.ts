import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  dados: any;
  @Output() dadosLinhaSelecionada = new EventEmitter<any>();
  linhaSelecionada : any; 
  textoBusca: string = "";

  constructor(private gridService: GridService) { }

  ngOnInit(){      
    this.carregarComponente();
  }

  returnZero() {
    return 0
  }

  obterDados(itemSelecionado: any): any{
     this.linhaSelecionada = itemSelecionado;   
  }

  enviarDados(): any{
    this.dadosLinhaSelecionada.emit(this.linhaSelecionada);
    this.textoBusca =  "";
  }

  carregarComponente() : void{    
    var r = this.gridService.mensagemDadosGrid.subscribe(dadosGrid => this.dados = dadosGrid);
  }
}
