import { DOCUMENT, inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { ThemeToggle } from '../../design-system/theme-toggle/models/theme-toggle.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ThemeToggleService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly storageKey = 'app-theme';
  private readonly currentTheme = signal<ThemeToggle>('light');
  
  readonly theme = this.currentTheme.asReadonly();

  constructor() {
    const storedTheme = this.getStoredTheme();
    if (storedTheme) {
      this.currentTheme.set(storedTheme);
      this.applyTheme(storedTheme);
    }
  }

  private applyTheme(theme: ThemeToggle): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  setTheme(theme: ThemeToggle): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);

    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, theme)
    }
  }

  private getStoredTheme(): ThemeToggle | null {
    if (!this.isBrowser) {
      return null;
    }
    const storedTheme = localStorage.getItem(this.storageKey);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  }
}
