import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

/**
 * all routes of which the application is composed by.
 */
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // no route specified (go to home)
  {path: 'home', component: AppComponent},
  {path: '**', component: AppComponent} // fallback route (not found - 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
