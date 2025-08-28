import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-info',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './step-info.component.html',
})
export class StepInfoComponent {
  description = '';

  constructor(private router: Router) {}

  next() {
    this.router.navigate(['project/reward']);
  }

  back() {
    this.router.navigate(['project/create']);
  }
}
