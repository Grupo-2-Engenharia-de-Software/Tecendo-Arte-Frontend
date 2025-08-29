import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step-reward',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './step-reward.component.html',
  styleUrl: './step-reward.component.scss'
})
export class StepRewardComponent {
  name = '';


  constructor(private router: Router, private route: ActivatedRoute) {}

  next(reward: boolean) {
    if (reward) {
      // Caminho absoluto a partir do root
      this.router.navigate(['/project/reward-info']);
    } else {
      this.router.navigate(['/project/images']);
    }
  }
}
