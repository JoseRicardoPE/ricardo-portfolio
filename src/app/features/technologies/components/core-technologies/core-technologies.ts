import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { Tag } from '../../../../design-system/tag/tag';

@Component({
  selector: 'app-core-technologies',
  imports: [Tag],
  templateUrl: './core-technologies.html',
  styleUrl: './core-technologies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreTechnologies {
  readonly technologies = input.required<readonly Technology[]>();
  readonly title = input.required<string>();
}
