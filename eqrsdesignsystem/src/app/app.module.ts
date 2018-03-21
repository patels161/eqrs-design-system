import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GettingStartedComponent } from './main-content/getting-started/getting-started.component';
import { StyleComponent } from './main-content/style/style.component';
import { ComponentsComponent } from './main-content/components/components.component';
import {StyleModule} from "./main-content/style/style.module";
import {GettingStartedModule} from "./main-content/getting-started/getting-started.module";
import {routing} from "./app-routing.module";
import {MenuItemsService} from "../services/menu-items.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainContentComponent,
    GettingStartedComponent,
    StyleComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    StyleModule,
    GettingStartedModule,
    routing
],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
