import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-images',
  imports: [RouterModule],
  templateUrl: './step-images.component.html',
  styleUrl: './step-images.component.scss'
})
export class StepImagesComponent {
  name = '';

  constructor(private router: Router) {}

  next() {
    // Poderia emitir evento para atualizar estado do pai
    this.router.navigate(['project/created']);
  }
}
