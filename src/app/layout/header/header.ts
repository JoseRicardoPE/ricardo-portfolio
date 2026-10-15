import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Icon } from '../../design-system/icon/icon';
import { NavItem } from '../../design-system/nav-item/nav-item';
import { LanguageSelector } from '../../design-system/language-selector/language-selector';
import { ThemeToggle } from '../../design-system/theme-toggle/theme-toggle';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [Icon, NavItem, LanguageSelector, ThemeToggle, RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
