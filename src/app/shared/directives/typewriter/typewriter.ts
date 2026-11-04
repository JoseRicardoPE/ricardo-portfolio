import { Directive, ElementRef, inject, input, OnDestroy, Renderer2, output, effect } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
})

export class Typewriter implements OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  readonly speed = input<number>(50);
  readonly delay = input<number>(0);
  readonly text = input.required<string>({ alias: 'appTypewriter' });
  readonly typingCompleted = output<void>();

  private timeoutId?: ReturnType<typeof setTimeout>;
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => {
      const text = this.text();
      const speed = this.speed();
      const delay = this.delay();

      this.clearTimers();

      this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', '');

      this.timeoutId = setTimeout(() => {
        this.typeText(text, speed);
      }, delay)
    })
  }

  private typeText(text: string, speed: number): void {
    let currentIndex = 0;
    
    this.intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        currentIndex++;
        this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', text.slice(0, currentIndex));
      } else {
        clearInterval(this.intervalId);
        this.intervalId = undefined;

        // Notificación para indicar que terminó la escritura
        this.typingCompleted.emit();
      }
    }, this.speed());
  }

  private clearTimers(): void {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }
}
