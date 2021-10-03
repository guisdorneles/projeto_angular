
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customCurreny' })
export class CustomCurrencyPipe implements PipeTransform {
  /**
   * Pipe que filtra uma lista de elementos utilizando o valor digitado em um campo texto
   *
   * @param valor valor a ser formatado* 
   * @returns valor formatado
   */
  
  transform(valor: string): string {
    debugger;
    let arrayValores = [];
    arrayValores = parseFloat(valor).toFixed(2).split('.');
    arrayValores[0] = "R$ " + arrayValores[0].split(/(?=(?:...)*$)/).join('.');
    return arrayValores.join(',');   
  }
}