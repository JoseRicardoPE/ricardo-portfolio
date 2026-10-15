import { Component } from '@angular/core';
import { Hero } from '../../../../design-system/hero/hero';

@Component({
  selector: 'app-projects',
  imports: [Hero],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
