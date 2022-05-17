import {
  Component,
  Input,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconName, iconPack } from '../../types/icon';

@Component({
  selector: 'i-icon',
  template: '',
  styleUrls: ['./icon.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @Input() name: IconName | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  @HostBinding('innerHTML') get html() {
    return this.name
      ? this.sanitizer.bypassSecurityTrustHtml(iconPack[this.name])
      : '';
  }
}
