import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { TextLink } from '../text-link/text-link';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-project-card',
  imports: [TextLink, Tag],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCard {
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input.required<string>();
  readonly category = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly technologies = input.required<readonly string[]>();
  readonly projectUrl = input.required<string>();
}
