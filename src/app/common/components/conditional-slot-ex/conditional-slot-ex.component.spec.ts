import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSlotExComponent } from './conditional-slot-ex.component';

describe('ConditionalSlotExComponent', () => {
  let component: ConditionalSlotExComponent;
  let fixture: ComponentFixture<ConditionalSlotExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalSlotExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSlotExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
