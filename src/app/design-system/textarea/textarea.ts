import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Textarea {
  readonly inputId = input.required<string>();
  readonly label = input.required<string>();
  readonly placeholder = input<string>();
  readonly maxLength = input<number>(1000);
  readonly helper = input('');
  readonly error = input('');
}
