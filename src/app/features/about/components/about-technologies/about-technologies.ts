import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Technology } from '../../../technologies/models/technology.model';
import { Tag } from '../../../../design-system/tag/tag';
import { TechnologyGroup } from '../../models/technology-group.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-technologies',
  imports: [Tag, TranslatePipe],
  templateUrl: './about-technologies.html',
  styleUrl: './about-technologies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutTechnologies {
  readonly title = input.required<string>();
  readonly technologies = input.required<readonly Technology[]>();

  readonly groups = computed<TechnologyGroup[]>(() => {
    const technologies = this.technologies().filter((technology) => technology.isActive);
    const categories = [
      {
        category: 'about.technologies.categories.frontend',
        values: ['frontend', 'language']
      },
      {
        category: 'about.technologies.categories.backend',
        values: ['backend', 'database']
      },
      {
        category: 'about.technologies.categories.tools',
        values: ['tools']
      },
      {
        category: 'about.technologies.categories.practices',
        values: ['practices']
      },
    ];
    return categories.map(({ category, values }) => {
      const filteredTechnologies = technologies.filter((technology) =>
        values.includes(technology.category),
      );
      const sortedTechnologies = filteredTechnologies.sort((a, b) => a.order - b.order);
      return { category, technologies: sortedTechnologies };
    });
  });
}
