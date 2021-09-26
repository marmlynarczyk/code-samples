import { Component, OnInit } from '@angular/core';
import { links } from '../menu-links';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  links = links;
  constructor() {}

  ngOnInit(): void {}
}
