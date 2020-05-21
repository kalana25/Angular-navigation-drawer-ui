import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrameworkCheckComponent } from './framework-check/framework-check.component';


import {MatButtonModule} from '@angular/material/button'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarOneComponent } from './toolbar-one/toolbar-one.component'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { DrawerComponent } from './drawer/drawer.component';
import {MatListModule} from '@angular/material/list';
import { MiniNavComponent } from './mini-nav/mini-nav.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FrameworkCheckComponent,
    ToolbarOneComponent,
    NavComponent,
    DrawerComponent,
    MiniNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
