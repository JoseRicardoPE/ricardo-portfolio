import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../../core/api.config';
import { ContactMessage, ContactMessageResponse } from '../models/contact-message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly contactUrl = `${API_CONFIG.baseUrl}/contact`;

  sendMessage(message: ContactMessage): Observable<ContactMessageResponse> {
    return this.http.post<ContactMessageResponse>(
      this.contactUrl,
      message
    );
  }
}
