import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-user',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup-user.component.html',
  styleUrl: './signup-user.component.scss'
})
export class SignupUserComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  // mover essa função para uma pasta utils futuramente
  validacaoConfirmaSenha(c1: string, c2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const campo = formGroup.get(c1);
      const campo2 = formGroup.get(c2);

      if (!campo || !campo2) {
        return null;
      }

      if (campo2.errors && !campo2.errors['mustMatch']) {
        return null;
      }

      if (campo.value !== campo2.value) {
        campo2.setErrors({ mustMatch: true });
      } else {
        campo2.setErrors(null)
      }

      return null;
    }
  }

  ngOnInit(): void {
      this.formCadastro = this.fb.group({
        userNome: ['', [Validators.required]],
        userEmail: ['', [Validators.required, Validators.email]],
        userSenha: ['', [Validators.required, Validators.minLength(8)]],
        userConfirmaSenha: ['', [Validators.required]]
      }, {
        validators: this.validacaoConfirmaSenha('userSenha', 'userConfirmaSenha')
      })
  }

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

  submit() {
    console.log(this.formCadastro.get('userEmail')?.value)
  }
}
