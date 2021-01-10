import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import {PreviewComponent} from './components/preview/preview.component';

const routes: Routes = [
  {path: 'preview', component: PreviewComponent},
  {path: '**', component: TracksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
