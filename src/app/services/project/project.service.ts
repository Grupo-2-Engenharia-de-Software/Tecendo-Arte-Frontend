import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ProjectResponse } from '../../models/project.interface,';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private backend = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

 getProjects(): Observable<ProjectResponse[]> {
    return this.http.get<ProjectResponse[]>(`${this.backend}/projetos`)
  }
}
