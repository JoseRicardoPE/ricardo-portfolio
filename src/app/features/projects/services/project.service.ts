import { Injectable, inject } from '@angular/core';
import { API_CONFIG } from '../../../core/api.config';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);
  private readonly projectsUrl = `${API_CONFIG.baseUrl}/projects`;

  getProjects(): Observable<{ data: Project[] }> {
    return this.http.get<{ data: Project[] }>(this.projectsUrl);
  }
}
