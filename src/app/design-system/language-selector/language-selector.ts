import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AppLanguage } from '../../core/models/app-language.model';
import { AppLanguageService } from '../../core/services/app-language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelector {
  private readonly appLanguageService = inject(AppLanguageService);
  readonly language = this.appLanguageService.language;
  
  selectLanguage(language: AppLanguage): void {
    if (language === this.language()) {
      return;
    }
    this.appLanguageService.setLanguage(language);
  }
}
