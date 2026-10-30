import { Directive, ElementRef, inject, input, Output, OnDestroy, OnInit, Renderer2, output } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
})
export class Typewriter implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  readonly speed = input<number>(50);
  readonly delay = input<number>(0);
  readonly text = input.required<string>({ alias: 'appTypewriter' });
  readonly typingCompleted = output<void>();

  private timeoutId?: ReturnType<typeof setTimeout>;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', '');

    this.timeoutId = setTimeout(() => {
      this.typeText();
    }, this.delay())
  }

  private typeText(): void {
    let currentIndex = 0;
    const text = this.text();

    this.intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        currentIndex++;
        this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', text.slice(0, currentIndex));
      } else {
        clearInterval(this.intervalId);

        // Notificación para indicar que terminó la escritura
        this.typingCompleted.emit();
      }
    }, this.speed());
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }
}
