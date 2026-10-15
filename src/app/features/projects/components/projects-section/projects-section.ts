import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { ProjectCard } from '../../../../design-system/project-card/project-card';
import { Project } from '../../models/project.model';
import { AppLanguageService } from '../../../../core/services/app-language.service';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly appLanguageService = inject(AppLanguageService);
  readonly title = input.required<string>();
  readonly projects = input.required<readonly Project[]>();
  readonly language = this.appLanguageService.language;

  getTechnologyNames(project: Project) {
    return project.technologies.map((technology) => technology.name);
  }
}
