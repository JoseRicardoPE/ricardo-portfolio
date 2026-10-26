
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

import { CaseStudyService } from '../../services/case-study.service';
import { CasesStudy as CaseStudyModel } from '../../models/case-study.model';
import { LoadStatus } from '../../../../shared/models/load-status.model';
import { Hero } from '../../../../design-system/hero/hero';
import { ButtonLink } from '../../../../design-system/button-link/button-link';
import { Tag } from '../../../../design-system/tag/tag';
import { AppLanguageService } from '../../../../core/services/app-language.service';
import { ProjectOverview } from '../../components/project-overview/project-overview';

type CaseStudyState =
  | { status: Extract<LoadStatus, 'loading' | 'error'>; data: null }
  | { status: 'success'; data: CaseStudyModel };

@Component({
  selector: 'app-case-study',
  imports: [Hero, ButtonLink, TranslatePipe, Tag, ProjectOverview],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudy {
  private readonly route = inject(ActivatedRoute);
  private readonly caseStudyService = inject(CaseStudyService);
  private readonly languageService = inject(AppLanguageService);

  readonly language = this.languageService.language;

  readonly state = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug')),
      switchMap((slug) => {
        if (!slug) {
          return of<CaseStudyState>({
            status: 'error',
            data: null,
          });
        }

        return this.caseStudyService.getCasesStudyBySlug(slug).pipe(
          map(
            ({ data }): CaseStudyState => ({
              status: 'success',
              data,
            }),
          ),
          startWith<CaseStudyState>({
            status: 'loading',
            data: null,
          }),
          catchError(() =>
            of<CaseStudyState>({
              status: 'error',
              data: null,
            }),
          ),
        );
      }),
    ),
    {
      initialValue: {
        status: 'loading',
        data: null,
      } as CaseStudyState,
    },
  );
}
