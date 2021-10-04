
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe que filtra uma lista de elementos utilizando o valor digitado em um campo texto
   *
   * @param lista lista de elementos
   * @param texto texto digitado a ser procurado na lista
   * @param tipoGrid indica qual será o campos a serem utilizados como fltro
   * @returns lista de elementos filtrada
   */
  transform(lista: any[], texto: string): any[] {
   
    if (!lista) {
      return [];
    }
    if (!texto) {
      return lista;
    }
    texto = texto.toLocaleLowerCase();

    if(lista[0].hasOwnProperty("endereco")){
      return lista.filter(it => {
        return (it.nome.toLocaleLowerCase().includes(texto) 
        || it.endereco.toLocaleLowerCase().includes(texto)
        );
      });
    }
    else{
      return lista.filter(it => {
        return (it.nome.toLocaleLowerCase().includes(texto) 
        || it.pais.toLocaleLowerCase().includes(texto)
        );
      });
    }
  }
}