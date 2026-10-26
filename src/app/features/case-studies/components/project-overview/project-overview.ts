import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { AppLanguageService } from '../../../../core/services/app-language.service';
import { CasesStudy } from '../../models/case-study.model';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECT_OVERVIEW_SECTIONS } from './project-overview.config';
import { ButtonLink } from '../../../../design-system/button-link/button-link';

@Component({
  selector: 'app-project-overview',
  imports: [TranslatePipe, ButtonLink],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectOverview {
  private readonly languageService = inject(AppLanguageService);
  readonly caseStudy = input.required<CasesStudy>();
  readonly language = this.languageService.language;
  readonly sectionsOverview = PROJECT_OVERVIEW_SECTIONS;
}
