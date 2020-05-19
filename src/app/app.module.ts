import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Mugan86GoogleAnalyticsModule} from 'mugan86-ng-google-analytics';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import {HomeMinifier} from "./components/home-minifier/home-minifier.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeMinifier,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    HttpClientModule,
    Mugan86GoogleAnalyticsModule.forRoot({analyticsId: 'UA-165732469-1', showLog: false}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SanitizeHtmlPipe
  ]
})
export class AppModule {
}
