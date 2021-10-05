import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs'; 

@Injectable()
export class GridService {



  private exibeGrid = new BehaviorSubject<any>(null);
  mensagemExibeGrid = this.exibeGrid.asObservable();

  private dadosGrid = new BehaviorSubject<boolean>(null);
  mensagemDadosGrid = this.dadosGrid.asObservable();

  constructor() { }

  msgExibeGrid(mensagem: any) {
    this.exibeGrid.next(mensagem)
  }

  msgDadosGrid(mensagem: any) {
    this.dadosGrid.next(mensagem)
  }


}