
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtroBuscaGrid', pure: true })
export class FiltroBuscaPipe implements PipeTransform {
  /**
   * Pipe que filtra uma lista de elementos utilizando o valor digitado em um campo texto
   *
   * @param lista lista de elementos
   * @param texto texto digitado a ser procurado na lista
   * @returns lista de elementos filtrada
   */
  transform(lista: any[], textoPesquisa: string, colunasPesquisa: string[]): any[] {

    if (!lista) {
      return [];
    }
    if (!textoPesquisa) {
      return lista;
    }

    textoPesquisa = textoPesquisa.toLocaleLowerCase();
    debugger;  
    let arrayCamposBuscaveis = Object.keys(lista[0]).filter(item => colunasPesquisa.includes(item));
    return lista.filter(item => {
      return Object.values(arrayCamposBuscaveis).some(key => {
        return String(item[key]).toLowerCase().includes(textoPesquisa.toLowerCase());
      });
    });   
  }
}