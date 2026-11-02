import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
  viewChild,
  ElementRef,
  afterNextRender,
  DestroyRef,
  effect,
  Injector,
  runInInjectionContext,
  untracked,
} from '@angular/core';
import { ProjectCard } from '../../../../design-system/project-card/project-card';
import { Project } from '../../models/project.model';
import { AppLanguageService } from '../../../../core/services/app-language.service';
import { Layout } from '../../../../shared/layout/models/layout.model';
import { Icon } from '../../../../design-system/icon/icon';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, Icon],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  private readonly carousel = viewChild<ElementRef<HTMLElement>>('carousel');
  private readonly appLanguageService = inject(AppLanguageService);
  private readonly destroyRef = inject(DestroyRef);

  readonly title = input.required<string>();
  readonly projects = input.required<readonly Project[]>();
  readonly language = this.appLanguageService.language;
  readonly layout = input<Layout>('grid');

  private readonly scrollSpeed = 25;
  private animationFrameId = 0;
  private lastFrameTime = 0;
  private position = 0;
  private cycleWidth = 0;
  private isDragging = false;
  private activePointerId: number | null = null;
  private lastPointerX = 0;
  private dragDistance = 0;
  private reducedMotion = false;
  private isReady = false;

  constructor() {
    afterNextRender(() => {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.isReady = true;
      this.initializeCarousel();
    });

    effect(() => {
      this.layout();
      this.projects();
      this.carousel();

      untracked(() => {
        if (this.isReady) {
          this.initializeCarousel();
        }
      });
    });

    this.destroyRef.onDestroy(() => {
      this.stopAnimation();
    });
  }

  getTechnologyNames(project: Project): string[] {
    return project.technologies.map((technology) => technology.name);
  }

  private initializeCarousel(): void {
    this.stopAnimation();

    if (this.layout() !== 'carousel') return;
    if (this.projects().length <= 1) return;

    const track = this.carousel()?.nativeElement;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>('app-project-card');

    if (cards.length < this.projects().length * 2) return;

    const firstCard = cards[0];
    const firstDuplicate = cards[this.projects().length];

    this.cycleWidth = firstDuplicate.offsetLeft - firstCard.offsetLeft;

    if (this.cycleWidth <= 0) return;

    this.position = 0;
    this.renderPosition();

    if (!this.reducedMotion) {
      this.startAnimation();
    }
  }

  private startAnimation(): void {
    if (this.animationFrameId !== 0) return;

    this.lastFrameTime = 0;

    const animate = (timestamp: number): void => {
      if (this.lastFrameTime === 0) {
        this.lastFrameTime = timestamp;
      }

      const deltaTime = Math.min((timestamp - this.lastFrameTime) / 1000, 0.05);

      this.lastFrameTime = timestamp;

      if (!this.isDragging) {
        this.position += this.scrollSpeed * deltaTime;
        this.normalizePosition();
        this.renderPosition();
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  private stopAnimation(): void {
    if (this.animationFrameId !== 0) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = 0;
    this.lastFrameTime = 0;
  }

  private normalizePosition(): void {
    if (this.cycleWidth <= 0) return;
    this.position = ((this.position % this.cycleWidth) + this.cycleWidth) % this.cycleWidth;
  }

  private renderPosition(): void {
    const track = this.carousel()?.nativeElement;
    if (!track) return;

    track.style.transform = `translate3d(${-this.position}px, 0, 0)`;
  }

  scrollCarousel(direction: 'previous' | 'next'): void {
    const track = this.carousel()?.nativeElement;
    if (!track || this.cycleWidth <= 0) return;

    const card = track.querySelector<HTMLElement>('app-project-card');
    if (!card) return;

    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    this.position += direction === 'next' ? distance : -distance;
    this.normalizePosition();
    this.renderPosition();
  }

  onPointerDown(event: PointerEvent): void {
    if (this.cycleWidth <= 0) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    this.isDragging = true;
    this.activePointerId = event.pointerId;
    this.lastPointerX = event.clientX;
    this.dragDistance = 0;
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging) return;
    if (event.pointerId !== this.activePointerId) return;

    const deltaX = event.clientX - this.lastPointerX;

    this.lastPointerX = event.clientX;
    this.dragDistance += Math.abs(deltaX);
    this.position -= deltaX;

    this.normalizePosition();
    this.renderPosition();
  }

  onPointerUp(event: PointerEvent): void {
    if (event.pointerId !== this.activePointerId) return;

    this.isDragging = false;
    this.activePointerId = null;
    this.lastPointerX = 0;
  }
}
