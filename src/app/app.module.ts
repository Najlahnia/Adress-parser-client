import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppRoutingRoutingModule } from './app-routing/app-routing-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AboutComponent,
    DropdownComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
