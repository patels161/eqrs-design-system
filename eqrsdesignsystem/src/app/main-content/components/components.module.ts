import {NgModule} from "@angular/core";
import {ComponentsRouting} from "./components-routing.module";
import {AccordionComponent} from "./accordion/accordion.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {ButtonsComponent} from "./buttons/buttons.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {DataTableComponent} from "./data-table/data-table.component";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {InputsComponent} from "./inputs/inputs.component";
import {LabelsComponent} from "./labels/labels.component";
import {ModalComponent} from "./modal/modal.component";
import {ProgressIndicatorComponent} from "./progress-indicator/progress-indicator.component";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {SearchComponent} from "./search/search.component";
import {PrismModule} from "@ngx-prism/core";
import { CommonModule } from '@angular/common';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  imports: [
    ComponentsRouting,
    PrismModule,
    CommonModule
  ],
  declarations: [
    AccordionComponent,
    AlertsComponent,
    ButtonsComponent,
    CheckboxComponent,
    DataTableComponent,
    DropdownComponent,
    InputsComponent,
    LabelsComponent,
    ModalComponent,
    ProgressIndicatorComponent,
    RadioButtonComponent,
    SearchComponent,
    TooltipsComponent
  ]
})
export class ComponentsModule { }
