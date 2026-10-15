import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-contact-cta',
  imports: [],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCta {
  readonly title = input.required<string>();
  readonly message = input.required<string>();
}
