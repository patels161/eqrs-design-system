import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhoneMaskComponent} from "./phone-mask/phone-mask.component";
import {DirectivesRouting} from "./directives-routing.module";
import {PrismModule} from "@ngx-prism/core";

@NgModule({
  imports: [
    CommonModule, DirectivesRouting, PrismModule
  ],
  declarations: [PhoneMaskComponent]
})
export class DirectivesModule { }
