import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  @Output() isActive = new EventEmitter<boolean>();
  active = false;
  constructor() {}

  ngOnInit(): void {
    this.isActive.emit(this.active);
  }
  handleClick() {
    this.active = !this.active;
    this.isActive.emit(this.active);
  }
}
