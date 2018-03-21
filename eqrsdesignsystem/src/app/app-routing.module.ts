import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {GridComponent} from "./main-content/style/grid/grid.component";
import {ColorsComponent} from "./main-content/style/colors/colors.component";
import {IconographyComponent} from "./main-content/style/iconography/iconography.component";
import {TypographyComponent} from "./main-content/style/typography/typography.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'grid', component: GridComponent},
  { path: 'colors', component: ColorsComponent},
  { path: 'iconography', component: IconographyComponent},
  { path: 'typography', component: TypographyComponent}
  ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);