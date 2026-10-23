import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, MessageCircle, Sun, Moon, X, Menu, ChevronLeft, ChevronRight } from 'lucide-angular';
import { IconSize } from './models/icon-size.model';
import { IconName } from './models/icon-name.model';
@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<IconSize>('lg');
  readonly MailIcon = Mail;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly WhatsappIcon = MessageCircle;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;
  readonly CloseIcon = X;
  readonly MenuIcon = Menu;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  readonly iconSize = computed(() => {
    const sizes: Record<IconSize, number> = {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 32,
      '2xl': 48,
    };
    return sizes[this.size()];
  });
}
