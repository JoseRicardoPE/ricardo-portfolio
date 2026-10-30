import { Component, ChangeDetectionStrategy, input, signal } from '@angular/core';
import { Typewriter } from '../../../../shared/directives/typewriter/typewriter';

@Component({
  selector: 'app-professional-profile',
  imports: [Typewriter],
  templateUrl: './professional-profile.html',
  styleUrl: './professional-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalProfile {
  readonly title = input.required<string>();
  readonly paragraphs = input.required<string[]>();
  readonly activeParagraph = signal(0);

  onTypingCompleted(index: number): void {
    this.activeParagraph.set(index + 1);
  }
}
