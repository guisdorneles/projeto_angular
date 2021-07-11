import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Menu } from "src/app/shared/models/menu/menu";
import { DataServiceMenu } from "src/app/shared/services/data.service.menu";
 
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    ngOnInit(): void {}


}