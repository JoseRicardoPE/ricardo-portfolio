import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Icon } from '../../design-system/icon/icon';
import { NavItem } from '../../design-system/nav-item/nav-item';
import { LanguageSelector } from '../../design-system/language-selector/language-selector';
import { ThemeToggle } from '../../design-system/theme-toggle/theme-toggle';
import { ThemeToggle as theme } from '../../design-system/theme-toggle/models/theme-toggle.model';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeToggleService } from '../../core/services/theme-toggle.service';

@Component({
  selector: 'app-header',
  imports: [Icon, NavItem, LanguageSelector, ThemeToggle, RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly themeToggleService = inject(ThemeToggleService);

  readonly isMenuOpen = signal(false);
  readonly theme = this.themeToggleService.theme;

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  setTheme(theme: theme): void {
    this.themeToggleService.setTheme(theme);
  }
}
