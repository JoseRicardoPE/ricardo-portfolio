import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { TextLink } from '../text-link/text-link';
import { Icon } from '../icon/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactCard as contactModel } from './models/contact-card.model';

@Component({
  selector: 'app-contact-card',
  imports: [TextLink, Icon, TranslatePipe],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCard {
  readonly options: contactModel[] = [
    {
      id: 'email',
      icon: 'email',
      title: 'contact.options.email.title',
      description: 'contact.options.email.description',
      actionLabel: 'contact.options.email.action',
      href: 'mailto:ricardo1981.dev@gmail.com',
      ariaLabel: 'contact.options.email.arialabel'
    },
    {
      id: 'linkedin',
      icon: 'linkedin',
      title: 'contact.options.linkedin.title',
      description: 'contact.options.linkedin.description',
      actionLabel: 'contact.options.linkedin.action',
      href: 'https://linkedin.com/in/ricardo-pacheco-escobar',
      ariaLabel: 'contact.options.linkedin.arialabel'
    },
    {
      id: 'github',
      icon: 'github',
      title: 'contact.options.github.title',
      description: 'contact.options.github.description',
      actionLabel: 'contact.options.github.action',
      href: 'https://github.com/JoseRicardoPE',
      ariaLabel: 'contact.options.github.arialabel'
    },
    {
      id: 'whatsapp',
      icon: 'whatsapp',
      title: 'contact.options.whatsapp.title',
      description: 'contact.options.whatsapp.description',
      actionLabel: 'contact.options.whatsapp.action',
      href: 'https://wa.me/3112360676',
      ariaLabel: 'contact.options.whatsapp.arialabel'
    },
  ]
}
