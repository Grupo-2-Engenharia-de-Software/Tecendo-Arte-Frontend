import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  
  sanitizedProgress: number = 0;

  ngOnChanges(): void {
    this.sanitizedProgress = Math.max(0, Math.min(100, this.progress));
  }

}
