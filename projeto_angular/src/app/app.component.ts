import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Menu } from './shared/models/menu/menu';
import { DataServiceMenu } from './shared/services/data.service.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  menu: Menu = new Menu();
  usuarioLogado: boolean = true;

  constructor(private data: DataServiceMenu) {}

  ngOnInit(){      
    this.data.currentMessage.subscribe( menu => this.menu = menu);
 }
}
