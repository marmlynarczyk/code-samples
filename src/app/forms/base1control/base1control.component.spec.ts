import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base1controlComponent } from './base1control.component';

describe('Base1controlComponent', () => {
  let component: Base1controlComponent;
  let fixture: ComponentFixture<Base1controlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base1controlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base1controlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
