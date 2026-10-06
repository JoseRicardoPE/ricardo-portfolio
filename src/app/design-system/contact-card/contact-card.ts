import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { TextLink } from '../text-link/text-link';
import { Icon } from '../icon/icon';

export type ContactCardType = 'email' | 'linkedin' | 'github' | 'whatsapp';

@Component({
  selector: 'app-contact-card',
  imports: [TextLink, Icon],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCard {
  readonly type = input.required<ContactCardType>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly actionLabel = input.required<string>();
  readonly href = input.required<string>();
}
