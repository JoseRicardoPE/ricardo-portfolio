import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from '../../services/contact.service';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly contactService = inject(ContactService);
  private readonly notificationService = inject(NotificationService);

  readonly isSubmitting = signal(false);

  readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
  });

  onSubmit(): void {
    if (this.isSubmitting()) {
      return;
    }
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.isSubmitting.set(true);
    
    const message = this.contactForm.getRawValue();
    
    this.contactService
      .sendMessage(message)
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.notificationService.success('contact.form.notifications.success');
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 429) {
            this.notificationService.warning('contact.form.notifications.rateLimit');
            return;
          }
          this.notificationService.error('contact.form.notifications.error');
        },
      });
  }
}
