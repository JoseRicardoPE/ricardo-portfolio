import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-text-link',
  imports: [LucideAngularModule],
  templateUrl: './text-link.html',
  styleUrl: './text-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLink {
  readonly href = input.required<string>();
  readonly disabled = input(false);
  readonly arrowApRightIcon = ArrowUpRight;
}
