import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Text1Component } from './text1/text1.component';
import { SingleSlotExComponent } from './single-slot-ex/single-slot-ex.component';
import { MultiSlotExComponent } from './multi-slot-ex/multi-slot-ex.component';
import { ConditionalSlotExComponent } from './conditional-slot-ex/conditional-slot-ex.component';

@NgModule({
  declarations: [
    Text1Component,
    SingleSlotExComponent,
    MultiSlotExComponent,
    ConditionalSlotExComponent,
  ],
  imports: [CommonModule],
  exports: [
    Text1Component,
    SingleSlotExComponent,
    MultiSlotExComponent,
    ConditionalSlotExComponent,
  ],
})
export class CommonComponentsModule {}
