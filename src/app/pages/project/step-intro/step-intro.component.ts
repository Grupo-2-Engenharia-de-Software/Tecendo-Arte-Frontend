import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-intro',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './step-intro.component.html',
})
export class StepIntroComponent {
  name = '';

  constructor(private router: Router) {}

  next() {
    // Poderia emitir evento para atualizar estado do pai
    this.router.navigate(['project/reward']);
  }
}
