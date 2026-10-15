import { Component } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';

@Component({
  selector: 'app-contact',
  imports: [Hero],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
