import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TipoArte } from '../../models/tipo-arte';
import { ImagemRequest } from '../../models/images';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface ProjetoData {
  titulo: string;
  descricaoProjeto: string;
  meta: number;
  tipoArte: TipoArte | '';
  imagens?: ImagemRequest[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private dataSubject = new BehaviorSubject<ProjetoData>({
    titulo: '',
    descricaoProjeto: '',
    meta: 0,
    tipoArte: '',
    imagens: [],
  });

  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  setData(data: Partial<ProjetoData>) {
    const current = this.dataSubject.value;
    this.dataSubject.next({ ...current, ...data });
  }

  getData() {
    return this.dataSubject.value;
  }

  reset() {
    this.dataSubject.next({
      titulo: '',
      descricaoProjeto: '',
      meta: 0,
      tipoArte: '',
      imagens: [],
    });
  }

  submitProject(projeto: ProjetoData) {
    return this.http.post(`${environment.apiUrl}/projetos`, projeto);
  }
}
