import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reward-info',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './reward-info.component.html',
  styleUrl: './reward-info.component.scss'
})
export class RewardInfoComponent {
  name = '';

  constructor(private router: Router) {}
  
  next() {
    this.router.navigate(['project/images']);
  }
}
