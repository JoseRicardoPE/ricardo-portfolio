import { Component } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';
import { ContactForm } from '../../components/contact-form/contact-form';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactOptions } from '../../components/contact-options/contact-options';

@Component({
  selector: 'app-contact',
  imports: [Hero, ContactForm, TranslatePipe, ContactOptions],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
