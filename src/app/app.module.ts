import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RocketsComponent } from './rockets/rockets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    RocketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
