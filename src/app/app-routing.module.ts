import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeMinifier} from './components/home-minifier/home-minifier.component';
import { InformationComponent } from './components/information/information.component';
import { ChangelogComponent } from './components/changelog/changelog.component';

/**
 * all routes of which the application is composed by.
 */
export const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeMinifier}, // no route specified (go to home)
  {path: '', component: HomeMinifier},
  {path: 'info', loadChildren:  () => import('./components/information/information.module').then(m => m.InformationModule)},
  {path: 'changelog', loadChildren:  () => import('./components/changelog/changelog.module').then(m => m.ChangelogModule)},
  {path: '**', component: HomeMinifier} // fallback route (not found - 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Summary: array of components that will be imported in the global app.module. (only the ones that will not be preloaded)
 */
export const routingComponents: Array<any> = [ HomeMinifier ];
