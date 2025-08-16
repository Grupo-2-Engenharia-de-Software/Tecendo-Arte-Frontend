import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  //@Input() email!: string;

  emailForm!: FormGroup

  constructor(private toastr: ToastrService) {
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
    this.emailForm.markAllAsTouched();

    if(this.emailForm.invalid){
      return
    } else {
      setTimeout(() => {
        this.toastr.success(
          'Um link de recuperação será ao seu e-mail',
          '',
          {
            positionClass: 'toast-top-center',
            timeOut: 2000,
          }
        );
      });
      this.emailForm.reset();
      this.submitted = false;
    }
  }
}
