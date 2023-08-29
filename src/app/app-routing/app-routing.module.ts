import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule

  ],
  exports:[AppRoutingRoutingModule]
})
export class AppRoutingModule { }
