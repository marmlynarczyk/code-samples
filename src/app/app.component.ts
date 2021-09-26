import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    (window as any).cs = {};
  }
  title = 'code-samples';
  menuOpen = false;
  handleHamburgerClick(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}
