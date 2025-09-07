import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectLayoutComponent } from './pages/project/project-layout/project-layout.component';
import { StepIntroComponent } from './pages/project/step-intro/step-intro.component';
import { RewardInfoComponent } from './pages/project/reward-info/reward-info.component';
import { StepRewardComponent } from './pages/project/step-reward/step-reward.component';
import { ConfirmComponent } from './pages/project/confirm/confirm.component';
import { StepImagesComponent } from './pages/project/step-images/step-images.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { authGuard } from './services/auth/auth.service';
import { tipoContaGuard } from './guards/tipo-conta.guard';


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
  },
  {
    path: 'project',
    component: ProjectLayoutComponent,
    canActivate: [authGuard, tipoContaGuard],
    canActivateChild: [authGuard, tipoContaGuard], 
    children: [
      { path: 'create', component: StepIntroComponent },
      { path: 'reward', component: StepRewardComponent },
      { path: 'reward-info', component: RewardInfoComponent },
      { path: 'images', component: StepImagesComponent },
      { path: 'created', component: ConfirmComponent },
    ]
  },{
    path: 'profile-user',
    component: ProfileUserComponent,
    canActivate: [authGuard]
  }
];
