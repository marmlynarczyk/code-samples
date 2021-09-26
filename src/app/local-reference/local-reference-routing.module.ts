import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalReferenceComponent } from './local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
const routes: Routes = [
  { path: 'viewchild', component: ViewChildComponent },
  { path: 'viewchildren', component: ViewChildrenComponent },
  { path: '', component: LocalReferenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalReferenceRoutingModule {
  constructor() {}
}
