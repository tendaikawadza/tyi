import {Component, Input} from '@angular/core';
import {Menu, MenuItem} from "../../../data/types";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styles: [
  ]
})
export class MenuItemComponent {
  @Input() menu: Menu = [];


  activeSubMenu(menuItems: MenuItem[]) {
    return false;
  }
}
