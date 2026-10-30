import { Component, ChangeDetectionStrategy, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type inputType = 'text' | 'email';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true,
    }
  ]
})
export class Input {
  readonly inputId = input.required<string>();
  readonly autoComplete = input<string>('off');
  readonly label = input.required<string>();
  readonly type = input<inputType>('text');
  readonly placeholder = input<string>();
  readonly helper = input('');
  readonly error = input('');
  readonly value = signal('');
  readonly disabled = signal(false);

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
}
