import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../models/menu/menu';

@Injectable()
export class DataServiceMenu {

  private messageSource = new BehaviorSubject({} as any);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Menu) {
    this.messageSource.next(message)
  }
}