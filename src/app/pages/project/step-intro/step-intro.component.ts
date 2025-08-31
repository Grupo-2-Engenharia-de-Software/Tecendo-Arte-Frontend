import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-intro',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './step-intro.component.html',
  styleUrl: './step-intro.component.scss'
})
export class StepIntroComponent {
  name = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      periodo: ['', Validators.required],
      descricao: ['', Validators.required],
      meta: ['', Validators.required]
    });
  }
  
  next() {
    sessionStorage.setItem('initial-info', JSON.stringify(this.form.value));
    this.router.navigate(['project/reward']);
  }

}