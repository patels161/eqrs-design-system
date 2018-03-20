import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GettingStartedComponent } from './main-content/getting-started/getting-started.component';
import { StyleComponent } from './main-content/style/style.component';
import { ComponentsComponent } from './main-content/components/components.component';
import { ColorsComponent } from './main-content/style/colors/colors.component';
import { GridComponent } from './main-content/style/grid/grid.component';
import { IconographyComponent } from './main-content/style/iconography/iconography.component';
import { TypographyComponent } from './main-content/style/typography/typography.component';
import {StyleModule} from "./main-content/style/style.module";
import {GettingStartedModule} from "./main-content/getting-started/getting-started.module";

const appRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'grid', component: GridComponent},
  { path: 'colors', component: ColorsComponent},
  { path: 'iconography', component: IconographyComponent},
  { path: 'typography', component: TypographyComponent}
];

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
    MatTabsModule,
    BrowserAnimationsModule,
    StyleModule,
    GettingStartedModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
