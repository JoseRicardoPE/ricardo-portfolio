import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly description = input.required<string>();
}
