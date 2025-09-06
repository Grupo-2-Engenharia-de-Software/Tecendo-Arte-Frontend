import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.interface,';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  imports: [ProgressBarComponent,CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
   @Input() project!: Project;

  getPercentage(): number {
    const percentage = (this.project.valorArrecadado / this.project.meta) * 100;
    return Number(percentage.toFixed(2));
  }

}
