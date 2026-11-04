import { computed, DOCUMENT, inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguage } from '../models/app-language.model';
import { APP_LOCALES } from '../constants/app-locale.constants';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class AppLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translateService = inject(TranslateService);
  private readonly storageKey = 'app-language';
  private readonly isBrowser = isPlatformBrowser(this.platformId)
  private readonly currentLanguage = signal<AppLanguage>(this.getInitialLanguage());
  readonly language = this.currentLanguage.asReadonly();
  readonly locale = computed(() => APP_LOCALES[this.currentLanguage()])

  constructor() {
    const language = this.currentLanguage();
    this.translateService.use(language);
    this.setDocumentLanguage(language);
  }

  private getInitialLanguage(): AppLanguage {
    if (!this.isBrowser) {
      return 'es';
    }

    const storedLanguage = localStorage.getItem(this.storageKey);

    if (storedLanguage === 'es' || storedLanguage === 'en') {
      return storedLanguage;
    }

    return 'es';
  }

  setLanguage(language: AppLanguage): void {
    this.currentLanguage.set(language);

    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, language);
    }
    
    this.translateService.use(language);
    this.setDocumentLanguage(language);
  }

  setDocumentLanguage(language: AppLanguage): void {
    this.document.documentElement.lang = language;
  }
}
