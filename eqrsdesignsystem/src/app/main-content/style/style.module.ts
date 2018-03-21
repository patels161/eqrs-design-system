import {ColorsComponent} from "./colors/colors.component";
import {GridComponent} from "./grid/grid.component";
import {IconographyComponent} from "./iconography/iconography.component";
import {TypographyComponent} from "./typography/typography.component";
import {NgModule} from "@angular/core";
import {StyleRouting} from "./style-routing.module";

@NgModule({
  imports: [
    StyleRouting
  ],
  declarations: [ColorsComponent, GridComponent, IconographyComponent, TypographyComponent]
})
export class StyleModule { }
