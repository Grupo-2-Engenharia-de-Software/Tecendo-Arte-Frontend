import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forgot-password-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  //@Input() email!: string;

  emailForm!: FormGroup

  constructor() {
  }
  
  submitted = false;

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required])
    })
  }

  get email() {
    return this.emailForm.get('email')!;
  }

  submit() {
    this.submitted = true;

    if(this.emailForm.invalid){
      return
    }
    console.log("enviou o formulario")
  }
}
