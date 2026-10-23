import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-other-projects',
  imports: [TranslatePipe],
  templateUrl: './other-projects.html',
  styleUrl: './other-projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherProjects {
  readonly title = input.required<string>();
  readonly heading = input.required<string>();
  readonly description = input.required<string>();
}
