import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Menu } from './components/navegacao/models/menu';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  menu: Menu = new Menu();
  
  constructor(private data: DataService) {}
  
      ngOnInit(){      
         this.data.currentMessage.subscribe( menu => this.menu = menu);
      }
  
  title = 'front-end';
}
