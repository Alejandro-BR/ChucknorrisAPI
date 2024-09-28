import { Routes } from '@angular/router';
import { ChucknorrisRandomComponent } from './pages/chucknorris-random/chucknorris-random.component';
import { ChucknorrisListComponent } from './pages/chucknorris-list/chucknorris-list.component';

export const routes: Routes = [
  { path: '', component: ChucknorrisRandomComponent },
  { path: 'list', component: ChucknorrisListComponent } 
];
