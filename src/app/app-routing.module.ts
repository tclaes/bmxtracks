import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  {path: 'tracks', component: TracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
