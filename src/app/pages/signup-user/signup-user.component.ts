import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

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
  mensagem: string | null = null;
  verificado = false;
  mostrar = false;
  timeoutRef: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

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
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(8)]],
        confirmaSenha: ['', [Validators.required]],
        tipoConta: ['USUARIO', [Validators.required]]
      }, {
        validators: this.validacaoConfirmaSenha('senha', 'confirmaSenha')
      })
  }

  irParaLogin(): void {
    this.router.navigate(['/login']);
  }

  submit() {
    const conta = {
      nome: this.formCadastro.value.nome,
      email: this.formCadastro.value.email,
      senha: this.formCadastro.value.senha,
      tipoConta: this.formCadastro.value.tipoConta
    }

    if(this.formCadastro.valid) {
      this.usuarioService.criarConta(conta).subscribe({
        next: res => this.exibirMsg('Cadastrado com sucesso!'),
        error: err => this.exibirMsg('Erro: ' + err.error)
      });
    } else {
      this.verificado = true;
      this.exibirMsg('Preencha todos os campos corretamente.');
    }
  }

  exibirMsg(mensagem: string) {
    this.mensagem = mensagem;
    this.mostrar = true;

    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }

    // Faz sumir depois de 5s
    this.timeoutRef = setTimeout(() => {
      this.fechar();
    }, 5000);
  }

  fechar() {
    this.mostrar = false;
    setTimeout(() => {
      this.mensagem = null;
    }, 300); // tempo para animar
  }
}
