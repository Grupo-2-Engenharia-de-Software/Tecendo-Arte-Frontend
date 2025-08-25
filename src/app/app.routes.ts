import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'signup',
    component: SignupUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
