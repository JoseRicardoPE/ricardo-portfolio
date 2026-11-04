import { Component, inject, DestroyRef } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { SeoService } from './core/services/seo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly seoService = inject(SeoService);
  private readonly translateService = inject(TranslateService);

  constructor() {
    // Para detectar cambios de ruta
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.updateSeoMetadata(); })
    
    // Para detectar cambios de idioma
    this.translateService.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => { this.updateSeoMetadata(); })
  }

  private updateSeoMetadata(): void {
    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const seo = route.snapshot.data['seo'] as
      | {
          titleKey: string;
          descriptionKey: string;
        }
      | undefined;

    if (!seo) return;

    this.seoService.updateMetadata(seo.titleKey, seo.descriptionKey);
  }
}
