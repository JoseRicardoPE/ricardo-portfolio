import { inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly translateService = inject(TranslateService);

  updateMetadata(titleKey: string, descriptionKey: string): void {
    console.log('[SEO] TranslateService:', this.translateService);

    console.log('[SEO] instant:', typeof this.translateService.instant);

    const title = this.translateService.instant(titleKey);
    const description = this.translateService.instant(descriptionKey);

    this.titleService.setTitle(title);

    this.metaService.updateTag({
      name: 'description',
      content: description,
    });
  }
}
