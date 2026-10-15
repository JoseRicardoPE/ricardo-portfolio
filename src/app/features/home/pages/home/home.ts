import { Component, computed, inject } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';
import { ButtonLink } from '../../../../design-system/button-link/button-link';
import { ProjectService } from '../../../projects/services/project.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectsSection } from '../../../projects/components/projects-section/projects-section';
import { TechnologiesService } from '../../../technologies/services/technologies.service';
import { CoreTechnologies } from '../../../technologies/components/core-technologies/core-technologies';
import { StrengthsService } from '../../../strengths/services/strengths.service';
import { ProfessionalStrengths } from '../../../strengths/components/professional-strengths/professional-strengths';
import { AppLanguageService } from '../../../../core/services/app-language.service';
import { ContactCta } from '../../components/contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  imports: [Hero, ButtonLink, TranslatePipe, ProjectsSection, CoreTechnologies, ProfessionalStrengths, ContactCta],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly projectService = inject(ProjectService);
  private readonly technologiesService = inject(TechnologiesService);
  private readonly strengthService = inject(StrengthsService);
  private readonly appLanguageService = inject(AppLanguageService);
  readonly language = this.appLanguageService.language;

  private readonly projectResponse = toSignal(this.projectService.getProjects(), {
    initialValue: { data: [] },
  });

  private readonly technologiesResponse = toSignal(this.technologiesService.getTechnologies(), {
    initialValue: { data: [] },
  });

  private readonly strengthResponse = toSignal(this.strengthService.getStrengths(), {
    initialValue: { data: [] },
  });

  readonly featuredProjects = computed(() =>
    this.projectResponse()
      .data.filter((project) => project.featured)
      .slice(0, 2),
  );

  readonly activeTechnologies = computed(() =>
    this.technologiesResponse()
      .data.filter((technology) => technology.isActive)
      .sort((a, b) => a.order - b.order),
  );

  readonly coreTechnologies = computed(() =>
    this.activeTechnologies().filter((technology) => technology.featured),
  );

  readonly professionalStrengths = computed(() => this.strengthResponse().data);
}
