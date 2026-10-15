import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../../../core/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Strengths } from '../models/strength.model';

@Injectable({
  providedIn: 'root',
})
export class StrengthsService {
  private readonly http = inject(HttpClient);
  private readonly strengthsUrl = `${API_CONFIG.baseUrl}/strengths`;

  getStrengths(): Observable<{ data: Strengths[] }> {
    return this.http.get<{ data: Strengths[] }>(this.strengthsUrl);
  }
}
