import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";

const appRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
