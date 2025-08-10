import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;

  login() {
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    console.log('Lembrar:', this.rememberMe);
  }
}
