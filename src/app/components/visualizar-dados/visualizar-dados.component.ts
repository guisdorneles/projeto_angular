import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-visualizar-dados',
  templateUrl: './visualizar-dados.component.html',
  styleUrls: ['./visualizar-dados.component.css']
})
export class VisualizarDadosComponent implements OnInit {

  @Output() novoDataSource = new EventEmitter<any>();

constructor() {
}

  ngOnInit(): void {    
  };

  dadosCliente : any =
  {
      "texto_placeholder": "Pesquisar por nome",
      "cabecalho" : ["Nome", "País", "Telefone"],
      "dataSet" : [
          {
              "nome" : "Julia",
              "pais" : "Alemanha",
              "telefone" : "4444-4444",
              "url_foto" : "./assets/imagens/icone-usuario.jpg"
          },
          {
              "nome" : "Wagner",
              "pais" : "França",
              "telefone" : "4444-5555",
              "url_foto" : "./assets/imagens/icone-usuario.jpg"
          },
          {
              "nome" : "Fabricio",
              "pais" : "Italia",
              "telefone" : "4444-9999",
              "url_foto" : "./assets/imagens/icone-usuario.jpg"
          }

      ]
  } 

  carregarNovaFonteDados(): any{
    this.novoDataSource.emit(this.dadosCliente);
  }
}
