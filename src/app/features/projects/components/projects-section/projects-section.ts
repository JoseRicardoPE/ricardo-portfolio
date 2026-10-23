import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
  viewChild,
  ElementRef,
} from '@angular/core';
import { ProjectCard } from '../../../../design-system/project-card/project-card';
import { Project } from '../../models/project.model';
import { AppLanguageService } from '../../../../core/services/app-language.service';
import { Layout } from '../../../../shared/layout/models/layout.model';
import { Icon } from '../../../../design-system/icon/icon';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, Icon],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly carousel = viewChild<ElementRef<HTMLElement>>('carousel');
  private readonly appLanguageService = inject(AppLanguageService);
  readonly title = input.required<string>();
  readonly projects = input.required<readonly Project[]>();
  readonly language = this.appLanguageService.language;
  readonly layout = input<Layout>('grid');

  getTechnologyNames(project: Project) {
    return project.technologies.map((technology) => technology.name);
  }

  scrollCarousel(direction: 'previous' | 'next'): void {
    const carousel = this.carousel()?.nativeElement;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('app-project-card');
    if (!card) return;
    const styles = getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    carousel.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }
}
