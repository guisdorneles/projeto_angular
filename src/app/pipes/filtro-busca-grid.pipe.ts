
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtroBuscaGrid' })
export class FiltroBuscaPipe implements PipeTransform {
  /**
   * Pipe que filtra uma lista de elementos utilizando o valor digitado em um campo texto
   *
   * @param lista lista de elementos
   * @param textoPesquisa texto digitado a ser procurado na lista
   * @returns lista de elementos filtrada
   */
  transform(listaDados: any[], textoPesquisa: string, colunasPesquisa: string[]): any[] {

    if (!listaDados) {
      return [];
    }
    if (!textoPesquisa) {
      return listaDados;
    }

    textoPesquisa = textoPesquisa.toLocaleLowerCase();
   
    let arrayCamposBuscaveis = Object.keys(listaDados[0]).filter(item => colunasPesquisa.includes(item));
    return listaDados.filter(item => {
      return Object.values(arrayCamposBuscaveis).some(key => {
        return String(item[key]).toLowerCase().includes(textoPesquisa.toLowerCase());
      });
    });   
  }
}