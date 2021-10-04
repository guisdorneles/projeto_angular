import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GridService } from 'src/app/shared/services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  dados: any;
  exibiGrid: boolean;
  @Output() dadosLinhaSelecionada = new EventEmitter<any>();
  btnDesativado : boolean = true;
  linhaSelecionada : any; 
  texto = "";

  constructor(private gridService: GridService) { }

  ngOnInit(){      
    this.carregarComponente();
  }

  returnZero() {
    return 0
  }

  obterDados(itemSelecionado: any): any{
     this.btnDesativado = false;
     this.linhaSelecionada = itemSelecionado;   
  }

  enviarDados(): any{
    this.dadosLinhaSelecionada.emit(this.linhaSelecionada);
    this.exibiGrid = false; 
    this.texto =  "";
  }

  carregarComponente() : void{    
    this.gridService.mensagemExibeGrid.subscribe(exibiGrid => this.exibiGrid = exibiGrid);
    var r = this.gridService.mensagemDadosGrid.subscribe(dadosGrid => this.dados = dadosGrid);
  }
}
