import { Component, forwardRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { ChartComponent } from '../chart/chart.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import {  ViewEncapsulation } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { TableComponent } from '../table/table.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet
    ,CardComponent,
    ChartComponent,
    InputSwitchModule,
    TooltipModule,
    TableComponent,
    ButtonModule,
     MenuModule



  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  encapsulation: ViewEncapsulation.None  // Apply styles globally


})
export class MainComponent {
  items: MenuItem[] | undefined;

color: string="color: #9C9D9F;";
cheecked:boolean=false;
test:string=""
constructor()
{
}

changecolor()
{
   if(this.cheecked)
  {

    this.cheecked=!this.cheecked

    this.color="color: #9C9D9F;"

    console.log(this.cheecked)



 }else{
  this.color="color:rgb(123, 96, 255);"
  this.cheecked=!this.cheecked
 console.log(this.cheecked)
 }


}











}
