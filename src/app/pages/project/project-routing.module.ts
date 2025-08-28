import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { StepIntroComponent } from './step-intro/step-intro.component';
import { StepInfoComponent } from './step-info/step-info.component';
import { StepRewardComponent } from './step-reward/step-reward.component';
import { StepImagesComponent } from './step-images/step-images.component';
import { RewardInfoComponent } from './reward-info/reward-info.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectLayoutComponent,
    children: [
      { path: 'create', component: StepIntroComponent },
      { path: 'info', component: StepInfoComponent },
      { path: 'reward', component: StepRewardComponent },
      { path: 'reward-info', component: RewardInfoComponent },
      { path: 'confirm', component: ConfirmComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}

