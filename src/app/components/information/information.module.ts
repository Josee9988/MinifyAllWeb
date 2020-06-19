import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InformationRoutingModule} from './information-routing.module';
import {InformationComponent} from './information.component';
import {SharedModuleModule} from '../../shared-module.module';

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModuleModule,
  ]
})
export class InformationModule {
}
