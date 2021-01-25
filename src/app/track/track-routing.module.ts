import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './containers/track-list/track-list.component';
import { TrackDetailComponent } from './containers/track-detail/track-detail.component';
import { ReportTrackComponent } from './containers/report-track/report-track.component';

const routes: Routes = [
  {
    path: '',
    component: TrackListComponent,
  },
  {
    path: 'report',
    component: ReportTrackComponent,
  },
  {
    path: ':id',
    component: TrackDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRoutingModule {}
