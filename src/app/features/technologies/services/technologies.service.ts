
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../../../core/api.config';
import { Observable } from 'rxjs';
import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  private readonly http = inject(HttpClient);
  private readonly technologiesUrl = `${API_CONFIG.baseUrl}/technologies`;

  getTechnologies(): Observable<{ data: Technology[] }> {
    return this.http.get<{ data: Technology[] }>(this.technologiesUrl);
  }
}
