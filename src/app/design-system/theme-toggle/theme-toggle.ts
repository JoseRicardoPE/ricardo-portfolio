import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Icon } from '../icon/icon';
import { ThemeToggle as Theme } from './models/theme-toggle.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [Icon, TranslatePipe],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggle {
  readonly theme = input<Theme>('light');
  readonly themeChange = output<Theme>();

  toggleTheme(): void {
    const themeSelected: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.themeChange.emit(themeSelected);
  }
}
