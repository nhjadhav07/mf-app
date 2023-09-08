import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App1Component } from './app.component';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    App1Component,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class AppModule { }
