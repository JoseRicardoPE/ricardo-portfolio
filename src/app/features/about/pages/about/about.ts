import { Component } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';

@Component({
  selector: 'app-about',
  imports: [Hero],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
