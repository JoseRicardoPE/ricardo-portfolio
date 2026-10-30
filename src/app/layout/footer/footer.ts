import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavItem } from '../../design-system/nav-item/nav-item';
import { Icon } from '../../design-system/icon/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [NavItem, Icon, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {}
