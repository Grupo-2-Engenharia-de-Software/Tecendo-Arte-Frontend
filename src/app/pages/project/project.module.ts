import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes standalone
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { StepIntroComponent } from './step-intro/step-intro.component';
import { StepInfoComponent } from './step-info/step-info.component';
import { StepRewardComponent } from './step-reward/step-reward.component';
import { StepImagesComponent } from './step-images/step-images.component';
import { RewardInfoComponent } from './reward-info/reward-info.component';
import { ConfirmComponent } from './confirm/confirm.component';

// Rotas do módulo
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProjectRoutingModule,

    // Importando os componentes standalone
    ProjectLayoutComponent,
    StepIntroComponent,
    StepInfoComponent,
    StepRewardComponent,
    StepImagesComponent,
    RewardInfoComponent,
    ConfirmComponent
  ]
})
export class ProjectModule {}