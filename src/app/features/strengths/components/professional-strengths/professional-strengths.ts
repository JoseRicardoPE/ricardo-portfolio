import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Strengths } from '../../models/strength.model';
import { Tag } from '../../../../design-system/tag/tag';

@Component({
  selector: 'app-professional-strengths',
  imports: [Tag],
  templateUrl: './professional-strengths.html',
  styleUrl: './professional-strengths.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalStrengths {
  readonly title = input.required<string>();
  readonly strengths = input.required<readonly Strengths[]>();
  readonly language = input.required<'es' | 'en'>();
}
