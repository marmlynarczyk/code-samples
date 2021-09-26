import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotExComponent } from './multi-slot-ex.component';

describe('MultiSlotExComponent', () => {
  let component: MultiSlotExComponent;
  let fixture: ComponentFixture<MultiSlotExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSlotExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
