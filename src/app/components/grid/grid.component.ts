import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
  @Input() dados: any;
  @Output() dadosLinhaSelecionada = new EventEmitter<any>();
  btnDesativado : boolean = true;
  linhaSelecionada : any; 
  texto = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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
  }
}
