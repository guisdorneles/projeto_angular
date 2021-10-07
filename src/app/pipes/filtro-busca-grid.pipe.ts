
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
  transform(lista: any[], textoBusca: string, colunasBuscaveis: string[]): any[] {

    if (!lista) {
      return [];
    }
    if (!textoBusca) {
      return lista;
    }

    textoBusca = textoBusca.toLocaleLowerCase();
    debugger;  
    let arrayCamposBuscaveis = Object.keys(lista[0]).filter(item => colunasBuscaveis.includes(item));
    return lista.filter(item => {
      return Object.values(arrayCamposBuscaveis).some(key => {
        return String(item[key]).toLowerCase().includes(textoBusca.toLowerCase());
      });
    });   
     
    // textoBusca = textoBusca.toLocaleLowerCase();
    //   return lista.filter(it => {
    //     return (it.nome.toLocaleLowerCase().includes(textoBusca) 
    //     || it.endereco.toLocaleLowerCase().includes(textoBusca)
    //     );
    //   });
  }
}