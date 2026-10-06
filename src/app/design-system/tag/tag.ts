import { Component, ChangeDetectionStrategy, input } from '@angular/core';

type tagColor = 'neutral' | 'green' | 'blue' | 'orange';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tag {
  readonly color = input<tagColor>('neutral');
}
