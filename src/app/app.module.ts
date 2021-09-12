import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Base1controlComponent } from './forms/base1control/base1control.component';
import { MaterialModule } from './common/material/material.module';
import { HamburgerComponent } from './css/hamburger/hamburger.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, Base1controlComponent, HamburgerComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
