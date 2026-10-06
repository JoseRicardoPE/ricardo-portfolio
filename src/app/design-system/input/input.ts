import { Component, ChangeDetectionStrategy, input } from '@angular/core';

type inputType = 'text' | 'email';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Input {
  readonly inputId = input.required<string>();
  readonly autoComplete = input<string>('off');
  readonly label = input.required<string>();
  readonly type = input<inputType>('text');
  readonly placeholder = input<string>();
  readonly helper = input('');
  readonly error = input('');
}
