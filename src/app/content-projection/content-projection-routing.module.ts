import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';
import { ConditionalComponent } from './conditional/conditional.component';
const routes: Routes = [
  { path: 'single', component: SingleSlotComponent },
  { path: 'multi', component: MultiSlotComponent },
  { path: 'conditional', component: ConditionalComponent },
  { path: '', component: SingleSlotComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentProjectionRoutingModule {
  constructor() {}
}
