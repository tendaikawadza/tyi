import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter();

  constructor() {}
}
