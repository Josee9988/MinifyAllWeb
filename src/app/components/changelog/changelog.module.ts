import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChangelogRoutingModule} from './changelog-routing.module';
import {ChangelogComponent} from "./changelog.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [ChangelogComponent],
  imports: [
    CommonModule,
    ChangelogRoutingModule,
    AppModule,
  ]
})
export class ChangelogModule {
}
