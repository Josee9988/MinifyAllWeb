import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import { InformationComponent } from './components/information/information.component';
import { ChangelogComponent } from './components/changelog/changelog.component';

/**
 * all routes of which the application is composed by.
 */
export const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponentComponent}, // no route specified (go to home)
  {path: '', component: HomeComponentComponent},
  {path: 'info', loadChildren:  () => import('./components/information/information.module').then(m => m.InformationModule)},
  {path: 'changelog', loadChildren:  () => import('./components/changelog/changelog.module').then(m => m.ChangelogModule)},
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
export const routingComponents: Array<any> = [ HomeComponentComponent, InformationComponent, ChangelogComponent
];
