import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { CommonComponentsModule } from '../common/components/components.module';

@NgModule({
  declarations: [SingleSlotComponent, MultiSlotComponent, ConditionalComponent],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule,
    CommonComponentsModule,
  ],
})
export class ContentProjectionModule {}
