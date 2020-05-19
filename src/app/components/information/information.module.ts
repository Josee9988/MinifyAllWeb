import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InformationRoutingModule} from './information-routing.module';
import {InformationComponent} from "./information.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    AppModule,
  ]
})
export class InformationModule {
}
