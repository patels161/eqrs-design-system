import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentNameComponent } from './side-nav/component-name.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
