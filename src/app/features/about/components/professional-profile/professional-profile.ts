import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-professional-profile',
  imports: [],
  templateUrl: './professional-profile.html',
  styleUrl: './professional-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalProfile {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
