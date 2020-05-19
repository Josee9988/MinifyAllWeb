import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChangelogRoutingModule} from './changelog-routing.module';
import {ChangelogComponent} from "./changelog.component";
import {SharedModuleModule} from "../../shared-module.module";

@NgModule({
  declarations: [ChangelogComponent],
  imports: [
    CommonModule,
    ChangelogRoutingModule,
    SharedModuleModule,
  ]
})
export class ChangelogModule {
}
