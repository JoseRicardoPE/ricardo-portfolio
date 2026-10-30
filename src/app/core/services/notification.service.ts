import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly toastr = inject(ToastrService);
  private readonly translateService = inject(TranslateService);

  // HTTP 201
  success(messageKey: string, titleKey?: string): void {
    this.toastr.success(
      this.translateService.instant(messageKey),
      titleKey ? this.translateService.instant(titleKey) : undefined,
    );
  }

  // HTTP 400, 500 o error de conexión
  error(messageKey: string, titleKey?: string): void {
    this.toastr.error(
      this.translateService.instant(messageKey),
      titleKey ? this.translateService.instant(titleKey) : undefined,
    );
  }

  // 
  info(messageKey: string, titleKey?: string): void {
    this.toastr.info(
      this.translateService.instant(messageKey),
      titleKey ? this.translateService.instant(titleKey) : undefined,
    );
  }

  // HTTP 429
  warning(messageKey: string, titleKey?: string): void {
    this.toastr.warning(
      this.translateService.instant(messageKey),
      titleKey ? this.translateService.instant(titleKey) : undefined,
    );
  }

  clear(): void {
    this.toastr.clear();
  }
}
