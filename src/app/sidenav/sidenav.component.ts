import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  links: {
    title: string;
    items: {
      title: string;
      items: { adress: string; description: string }[];
    }[];
  }[] = [
    {
      title: 'CSS',
      items: [
        { title: 'fontFace', items: [{ adress: 'test', description: 'test' }] },
      ],
    },
    {
      title: 'Reactive forms',
      items: [
        { title: 'title 1', items: [{ adress: 'test', description: 'test' }] },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
