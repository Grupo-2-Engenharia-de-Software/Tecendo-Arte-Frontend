import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService, LoginRequest, LoginResponse } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';
  message: string = '';

  constructor(private usuarioService: UsuarioService) {}

  onSubmit() {
    const loginData: LoginRequest = {
      email: this.email,
      senha: this.senha
    };

    this.usuarioService.login(loginData).subscribe({
      next: (response: LoginResponse) => {
        console.log('Login realizado com sucesso!', response);
        this.message = `Bem-vindo(a), ${response.nome}!`;

        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response));
      },
      error: (err: any) => {
        console.error('Erro no login:', err);
        this.message = 'E-mail ou senha inválidos.';
      }
    });
  }
}
