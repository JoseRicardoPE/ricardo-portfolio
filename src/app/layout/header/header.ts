import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Icon } from '../../design-system/icon/icon';
import { NavItem } from '../../design-system/nav-item/nav-item';
import { Language, LanguageSelector } from '../../design-system/language-selector/language-selector';
import { ThemeToggle } from '../../design-system/theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [Icon, NavItem, LanguageSelector, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly isMenuOpen = signal(false);
  readonly language = signal<Language>('es');

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
