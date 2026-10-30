import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ContactCard } from '../../../../design-system/contact-card/contact-card';

@Component({
  selector: 'app-contact-options',
  imports: [ContactCard],
  templateUrl: './contact-options.html',
  styleUrl: './contact-options.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactOptions {
  readonly title = input.required<string>();
}
