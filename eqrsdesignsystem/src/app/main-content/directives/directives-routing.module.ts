import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {PhoneMaskComponent} from "./phone-mask/phone-mask.component";

const directiveRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'phonemask', component: PhoneMaskComponent}
];
export const DirectivesRoutingProviders: any[] = [];

export const DirectivesRouting: ModuleWithProviders = RouterModule.forRoot(directiveRoutes);

