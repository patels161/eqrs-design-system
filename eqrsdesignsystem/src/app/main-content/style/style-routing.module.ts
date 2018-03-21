import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/compiler/src/core";
import {ColorsComponent} from "./colors/colors.component";
import {GridComponent} from "./grid/grid.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";

const styleRoutes: Routes = [
  { path: '', redirectTo: '',  pathMatch: 'full'},
  { path: 'grid', component: GridComponent},
  { path: 'colors', component: ColorsComponent},
  { path: 'iconography', component: IconographyComponent},
  { path: 'typography', component: TypographyComponent}
];
export const StyleRoutingProviders: any[] = [];

export const StyleRouting: ModuleWithProviders = RouterModule.forRoot(styleRoutes);
