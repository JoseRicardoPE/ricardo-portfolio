import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
  DestroyRef,
  signal,
} from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectService } from '../../services/project.service';
import { ProjectsSection } from '../../components/projects-section/projects-section';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Project } from '../../models/project.model';
import { LoadStatus } from '../../../../shared/models/load-status.model';
import { OtherProjects } from '../../components/other-projects/other-projects';

@Component({
  selector: 'app-projects',
  imports: [Hero, TranslatePipe, ProjectsSection, OtherProjects],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  private readonly destroyRef = inject(DestroyRef);
  readonly title = input.required<string>();
  readonly projects = signal<readonly Project[]>([]);
  readonly status = signal<LoadStatus>('loading');

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.status.set('loading');
    this.projectService
      .getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ data }) => {
          this.projects.set(data);
          this.status.set(data.length > 0 ? 'success' : 'empty');
        },
        error: () => {
          this.status.set('error');
        },
      });
  }
}
