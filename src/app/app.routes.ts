import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';

export const routes: Routes = [
    { 
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupUserComponent,
  }
];
