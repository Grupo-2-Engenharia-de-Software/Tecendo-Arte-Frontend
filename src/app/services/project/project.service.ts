import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Project } from '../../models/project.interface,';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private backend = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

 getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.backend}/projetos`)
  }
}
