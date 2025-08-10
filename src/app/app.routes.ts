import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
    path: 'home',
    component: HomeComponent,
    title: 'Página Inicial' // Título da página (opcional)
  },
  {
    path: 'login',
    loadComponent: ()=>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  }
];
