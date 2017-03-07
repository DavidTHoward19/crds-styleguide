import { Component } from '@angular/core';
import { IconService } from '../../../directives/icons/icons.service'

@Component({
  templateUrl: './inline-svg.component.html',
  providers: [IconService]
})

export class IconInlineComponent {

  icons = [];

  constructor(private _iconService: IconService) {}

  ngOnInit() {
    this.icons = this._iconService.icons;
  }

}
