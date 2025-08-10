import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
    { 
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'forget-password',
    component: ForgotPasswordComponent,
    title: 'Recuperar senha'
  },
];
