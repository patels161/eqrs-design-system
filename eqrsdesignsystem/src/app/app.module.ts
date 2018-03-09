import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { ComponentNameComponent } from './side-nav/component-name.component';
import { MainContentComponent } from './main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
