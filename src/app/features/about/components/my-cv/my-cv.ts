import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-my-cv',
  imports: [],
  templateUrl: './my-cv.html',
  styleUrl: './my-cv.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCv {
  readonly title = input.required<string>();
  readonly heading = input.required<string>();
  readonly description = input.required<string>();
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input.required<string>();
}
