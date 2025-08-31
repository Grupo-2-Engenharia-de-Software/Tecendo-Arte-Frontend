import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private backend = environment.apiUrl;

  constructor(private http: HttpClient) { }

  criarConta(conta: any): Observable<any> {
    return this.http.post(`${this.backend}/contas`, conta);
  } 

}