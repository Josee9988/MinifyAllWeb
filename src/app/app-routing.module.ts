import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import { InformationComponent } from './components/information/information.component';

/**
 * all routes of which the application is composed by.
 */
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // no route specified (go to home)
  {path: 'home', component: HomeComponentComponent},
  {path: 'info', component: InformationComponent},
  {path: '**', component: HomeComponentComponent} // fallback route (not found - 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Summary: array of components that will be imported in the global app.module.
 */
export const routingComponents: Array<any> = [ HomeComponentComponent, InformationComponent
];
