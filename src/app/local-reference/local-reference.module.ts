import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalReferenceRoutingModule } from './local-reference-routing.module';
import { LocalReferenceComponent } from './local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { MaterialModule } from '../common/material/material.module';
import { CommonComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  declarations: [
    LocalReferenceComponent,
    ViewChildComponent,
    ViewChildrenComponent,
  ],
  imports: [
    CommonModule,
    LocalReferenceRoutingModule,
    MaterialModule,
    CommonComponentsModule,
  ],
})
export class LocalReferenceModule {}
