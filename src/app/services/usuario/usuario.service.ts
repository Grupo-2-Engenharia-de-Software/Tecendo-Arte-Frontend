import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  nome: string;
  usuarioId: number;
  tipoConta: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private backend = environment.apiUrl;

  constructor(private http: HttpClient) {}

  criarConta(conta: any): Observable<any> {
    return this.http.post(`${this.backend}/contas`, conta);
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.backend}/usuarios/login`, data);
  }

  getLoggedUser(): LoginResponse | null {
    const usuarioJson = localStorage.getItem('usuario');
    if (usuarioJson) {
      return JSON.parse(usuarioJson);
    }
    return null;
  }
}