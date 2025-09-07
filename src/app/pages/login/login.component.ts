import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService, LoginRequest, LoginResponse } from '../../services/usuario/usuario.service';
import { Router } from '@angular/router'; 

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
  loginType: string = 'USUARIO';
  message: string = '';

  constructor(private usuarioService: UsuarioService,private router: Router) {}

  onSubmit() {
    const loginData: LoginRequest = {
      email: this.email,
      senha: this.senha
    };

    this.usuarioService.login(loginData, this.loginType).subscribe({
      next: (response: LoginResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response));

        if (this.loginType == 'USUARIO') {
          this.router.navigate(['/profile-user']);
        }
      },
      error: (err: any) => {
        this.message = 'E-mail ou senha inválidos.';
      }
    });
  }
}
