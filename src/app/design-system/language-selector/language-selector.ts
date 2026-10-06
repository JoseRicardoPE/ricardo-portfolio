import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

export type Language = 'es' | 'en';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelector {
  readonly language = input<Language>('es');
  readonly languageChange = output<Language>();

  selectLanguage(language: Language): void {
    if (language === this.language()) {
      return;
    }
    this.languageChange.emit(language);
  }
}
