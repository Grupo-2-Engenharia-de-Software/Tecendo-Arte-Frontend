import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjetoService {
  private projetoData: any = {};
  private backend = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setData(stepData: any) {
    this.projetoData = { ...this.projetoData, ...stepData };
  }

  getData() {
    return this.projetoData;
  }

  submitProject(projeto: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.backend}/projetos`, projeto, { headers });
  }

  clearData() {
    this.projetoData = {};
  }
}
