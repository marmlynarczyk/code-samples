import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('elRef', { static: true }) elRef: ElementRef | undefined;
  @ViewChild('text1') text1: any;
  constructor(private cdr: ChangeDetectorRef) {}
  rectWidth: number | null = null;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.rectWidth = this.elRef?.nativeElement.getBoundingClientRect().width;
    console.log('VIEWCHILD COMPONENT', this.text1);
    this.cdr.detectChanges();
  }
}
