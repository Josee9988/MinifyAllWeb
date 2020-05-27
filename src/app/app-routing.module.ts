import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeMinifier} from './components/home-minifier/home-minifier.component';

/**
 * all routes of which the application is composed by.
 */
export const routes: Routes = [
  {path: '', component: HomeMinifier},
  {
    path: 'info',
    loadChildren: () => import('./components/information/information.module').then(m => m.InformationModule)
  },
  {
    path: 'changelog',
    loadChildren: () => import('./components/changelog/changelog.module').then(m => m.ChangelogModule)
  },
  {path: '**', redirectTo: ''} // fallback route (not found - 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
