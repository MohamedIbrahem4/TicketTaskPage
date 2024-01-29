import { Component } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import {  MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { Customer } from '../services/customer';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
  SliderModule,
  DropdownModule,
  TagModule,
  CommonModule,
  FormsModule,
  AvatarGroupModule,
  AvatarModule,
  PaginatorModule

  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  customers: Customer[];
loading: boolean|undefined;
counter:number=0;

constructor()
{

  this.counter++;

  this.customers= ([ new Customer(1,"محمد ابراهيم",
  "C-102",
  40,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/bernardodominic.png"
),
new Customer(2,"محمد الغريب",
  "C-103",
  60,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/ivanmagalhaes.png"
)
,
new Customer(3,"حسين خلف",
  "C-105",
  70,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png")
,
new Customer(4,"مصطفي محمود",
  "C-106",
  50,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png")
,
new Customer(5,"سعد سمير",
  "C-108",
  30,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png")
,
new Customer(6,"الشيخ حاتم",
  "C-109",
  10,
  "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
1,
1,
"تذكرة رقم 45.pdf",
"https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png")

])




}








}


