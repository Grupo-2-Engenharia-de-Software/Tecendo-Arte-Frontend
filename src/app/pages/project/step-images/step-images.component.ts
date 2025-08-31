import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-images',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './step-images.component.html',
  styleUrl: './step-images.component.scss'
})
export class StepImagesComponent {
  name = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      images: ['', Validators.required]
    });
  }
  
  next() {
    sessionStorage.setItem('project-images', JSON.stringify(this.form.value));
    this.router.navigate(['project/created']);
  }
}
