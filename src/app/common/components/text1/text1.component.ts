import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text1',
  templateUrl: './text1.component.html',
  styleUrls: ['./text1.component.scss'],
})
export class Text1Component implements OnInit {
  @Input('text') text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
