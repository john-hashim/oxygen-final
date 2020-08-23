import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopComponent } from './laptop/laptop.component';
import { AcComponent } from './ac/ac.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RefMainComponent } from './ref-main/ref-main.component';
import { TvMainComponent } from './tv-main/tv-main.component';
import { LaptopMainComponent } from './laptop-main/laptop-main.component';
import { WashingmachineMainComponent } from './washingmachine-main/washingmachine-main.component';
import { MobileMainComponent } from './mobile-main/mobile-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopComponent,
    AcComponent,
    TvComponent,
    WashingmachineComponent,
    RefMainComponent,
    TvMainComponent,
    LaptopMainComponent,
    WashingmachineMainComponent,
    MobileMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
