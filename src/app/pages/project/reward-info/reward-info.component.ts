import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reward-info',
  imports: [RouterModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './reward-info.component.html',
  styleUrl: './reward-info.component.scss'
})
export class RewardInfoComponent {
  name = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      images: ['', Validators.required]
    });
  }
  
  next() {
    sessionStorage.setItem('reward-info', JSON.stringify(this.form.value));
    this.router.navigate(['project/images']);
  }
}
