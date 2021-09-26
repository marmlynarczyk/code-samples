import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss'],
})
export class ViewChildrenComponent implements OnInit, AfterViewInit {
  fruits = ['banana', 'orange', 'apple', 'kiwi'];
  fruitInput = '';
  @ViewChildren('fruitRef') fruitRef: QueryList<any> | undefined;
  constructor() {}

  ngOnInit(): void {}
  onFruitInputKeyUp(val: string) {
    this.fruitInput = val;
  }
  ngAfterViewInit() {
    //subscribe before AfterViewInit doesnt work
    this.fruitRef?.changes.subscribe((res) => console.log('VIEWCHILDREN', res));
  }
  onAddFruitClick() {
    if (this.fruitInput.length) {
      this.fruits.push(this.fruitInput);
      this.fruitInput = '';
    }
  }
}
