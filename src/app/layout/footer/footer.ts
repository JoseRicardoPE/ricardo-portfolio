import { Component } from '@angular/core';
import { NavItem } from '../../design-system/nav-item/nav-item';
import { Icon } from '../../design-system/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [NavItem, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
