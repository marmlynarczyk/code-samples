import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatExpansionModule],
  exports: [MatSidenavModule, MatIconModule, MatExpansionModule],
})
export class MaterialModule {}
