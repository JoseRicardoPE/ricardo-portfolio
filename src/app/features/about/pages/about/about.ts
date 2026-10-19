import { Component, computed, inject } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';
import { ProfessionalProfile } from '../../components/professional-profile/professional-profile';
import { TranslatePipe } from '@ngx-translate/core';
import { AboutTechnologies } from '../../components/about-technologies/about-technologies';
import { TechnologiesService } from '../../../technologies/services/technologies.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MyCv } from '../../components/my-cv/my-cv';
import { ButtonLink } from '../../../../design-system/button-link/button-link';

@Component({
  selector: 'app-about',
  imports: [Hero, TranslatePipe, ProfessionalProfile, AboutTechnologies, MyCv, ButtonLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly technologiesService = inject(TechnologiesService);
  private readonly technologiesResponse = toSignal(this.technologiesService.getTechnologies(), {
    initialValue: { data: [] },
  });
  readonly technologies = computed(() => this.technologiesResponse().data);
}
