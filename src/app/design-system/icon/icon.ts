import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, MessageCircle, Sun, Moon, X, Menu } from 'lucide-angular';

export type IconName = 'email' | 'linkedin' | 'github' | 'whatsapp' | 'sun' | 'moon' | 'close' | 'open';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
