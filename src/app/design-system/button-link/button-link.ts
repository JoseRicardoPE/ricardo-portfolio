import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

type ButtonLinkVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button-link',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './button-link.html',
  styleUrl: './button-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonLink {
  readonly href = input.required<string>();
  readonly variant = input<ButtonLinkVariant>('primary');
  readonly external = input(false);
  readonly fullWidth = input(false);
}
