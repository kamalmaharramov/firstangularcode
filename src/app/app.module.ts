import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
   HeadComponent
  
  ],
  imports: [
   BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeadComponent]
})
export class AppModule { }
