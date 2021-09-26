import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotExComponent } from './single-slot-ex.component';

describe('SingleSlotExComponent', () => {
  let component: SingleSlotExComponent;
  let fixture: ComponentFixture<SingleSlotExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSlotExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlotExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
