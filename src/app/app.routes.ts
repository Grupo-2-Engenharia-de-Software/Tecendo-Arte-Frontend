import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';

export const routes: Routes = [
    { 
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Recuperar senha'
  },
  {
    path: 'signup',
    component: SignupUserComponent,
  }
];
