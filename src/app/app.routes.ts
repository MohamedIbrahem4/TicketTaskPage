import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'MohamedIbrahem' },

  { path: 'MohamedIbrahem', component: MainComponent },


];
